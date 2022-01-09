package org.nh.artha.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of {@link PackageMasterSearchRepository} to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class PackageMasterSearchRepositoryMockConfiguration {

    @MockBean
    private PackageMasterSearchRepository mockPackageMasterSearchRepository;

}
