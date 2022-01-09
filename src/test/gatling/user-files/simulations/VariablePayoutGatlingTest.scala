import _root_.io.gatling.core.scenario.Simulation
import ch.qos.logback.classic.{Level, LoggerContext}
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import org.slf4j.LoggerFactory

import scala.concurrent.duration._

/**
 * Performance test for the VariablePayout entity.
 */
class VariablePayoutGatlingTest extends Simulation {

    val context: LoggerContext = LoggerFactory.getILoggerFactory.asInstanceOf[LoggerContext]
    // Log all HTTP requests
    //context.getLogger("io.gatling.http").setLevel(Level.valueOf("TRACE"))
    // Log failed HTTP requests
    //context.getLogger("io.gatling.http").setLevel(Level.valueOf("DEBUG"))

    val baseURL = Option(System.getProperty("baseURL")) getOrElse """http://localhost:8080"""

    val httpConf = http
        .baseUrl(baseURL)
        .inferHtmlResources()
        .acceptHeader("*/*")
        .acceptEncodingHeader("gzip, deflate")
        .acceptLanguageHeader("fr,fr-fr;q=0.8,en-us;q=0.5,en;q=0.3")
        .connectionHeader("keep-alive")
        .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:33.0) Gecko/20100101 Firefox/33.0")
        .silentResources // Silence all resources like css or css so they don't clutter the results

    val headers_http = Map(
        "Accept" -> """application/json"""
    )

    val headers_http_authentication = Map(
        "Content-Type" -> """application/json""",
        "Accept" -> """application/json"""
    )

    val headers_http_authenticated = Map(
        "Accept" -> """application/json""",
        "Authorization" -> "${access_token}"
    )

    val scn = scenario("Test the VariablePayout entity")
        .exec(http("First unauthenticated request")
        .get("/api/account")
        .headers(headers_http)
        .check(status.is(401))
        ).exitHereIfFailed
        .pause(10)
        .exec(http("Authentication")
        .post("/api/authenticate")
        .headers(headers_http_authentication)
        .body(StringBody("""{"username":"admin", "password":"admin"}""")).asJson
        .check(header("Authorization").saveAs("access_token"))).exitHereIfFailed
        .pause(2)
        .exec(http("Authenticated request")
        .get("/api/account")
        .headers(headers_http_authenticated)
        .check(status.is(200)))
        .pause(10)
        .repeat(2) {
            exec(http("Get all variablePayouts")
            .get("/api/variable-payouts")
            .headers(headers_http_authenticated)
            .check(status.is(200)))
            .pause(10 seconds, 20 seconds)
            .exec(http("Create new variablePayout")
            .post("/api/variable-payouts")
            .headers(headers_http_authenticated)
            .body(StringBody("""{
                "id":null
                , "unitCode":"SAMPLE_TEXT"
                , "employeeId":null
                , "version":"0"
                , "createdBy":"SAMPLE_TEXT"
                , "createdDate":"2020-01-01T00:00:00.000Z"
                , "changeRequestStatus":"DRAFT"
                , "startingVersion":"0"
                , "currentVersion":"0"
                , "remarks":"SAMPLE_TEXT"
                , "commencementDate":"2020-01-01T00:00:00.000Z"
                , "contractEndDate":"2020-01-01T00:00:00.000Z"
                , "minAssuredAmount":"0"
                , "maxPayoutAmount":"0"
                , "minAssuredValidityDate":"2020-01-01T00:00:00.000Z"
                , "status":null
                , "uploadContract":"SAMPLE_TEXT"
                }""")).asJson
            .check(status.is(201))
            .check(headerRegex("Location", "(.*)").saveAs("new_variablePayout_url"))).exitHereIfFailed
            .pause(10)
            .repeat(5) {
                exec(http("Get created variablePayout")
                .get("${new_variablePayout_url}")
                .headers(headers_http_authenticated))
                .pause(10)
            }
            .exec(http("Delete created variablePayout")
            .delete("${new_variablePayout_url}")
            .headers(headers_http_authenticated))
            .pause(10)
        }

    val users = scenario("Users").exec(scn)

    setUp(
        users.inject(rampUsers(Integer.getInteger("users", 100)) during (Integer.getInteger("ramp", 1) minutes))
    ).protocols(httpConf)
}
