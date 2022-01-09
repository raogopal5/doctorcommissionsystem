package org.nh.artha.repository;


import org.nh.artha.domain.UserDashboardWidget;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;


/**
 * Spring Data JPA repository for the UserDashboardWidget entity.
 */
@SuppressWarnings("unused")
@Repository
public interface UserDashboardWidgetRepository extends JpaRepository<UserDashboardWidget, Long> {
    /**
     * @param dashboardId
     * @return
     */
    List<UserDashboardWidget> findAllByUserDashboardId(Long dashboardId);


    @Query(value = "select count(udw.id) from user_dashboard_widget udw where udw.iu_datetime between :fromDate AND :toDate", nativeQuery = true)
    long getTotalRecord(@Param("fromDate") LocalDate fromDate, @Param("toDate") LocalDate toDate);


    @Query(value = "select * from user_dashboard_widget udw where udw.iu_datetime between :fromDate AND :toDate order by udw.iu_datetime", nativeQuery = true)
    List<UserDashboardWidget> findByDateRangeSortById(@Param("fromDate") LocalDate fromDate, @Param("toDate") LocalDate toDate, Pageable pageable);
}
