/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgJhipsterModule } from 'ng-jhipster';
import { RouterModule } from '@angular/router';
import { ClickOutsideModule } from 'ng-click-outside';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ArthaSharedModule } from 'app/shared/shared.module';
import { AgeFromDateOfBirthPipe } from './age-calculator/age-calculator.pipe';
import { SessionStorageService, LocalStorageService } from 'ng2-webstorage';
import { Daterangepicker } from 'ng2-daterangepicker';
import { HasAnyChildAuthoritiesDirective } from './directives/has-any-child-authorities.directive';
import {
  AthmaDateConverter,
  NavigationService,
  DialogComponent,
  DialogService,
  RenderHtmlSafePipe,
  NumberOnlyDirective,
  SearchTermModify,
  UrlToTitlePipe,
  InputDebounceComponent,
  AthmaStringManipulationComponent,
  ListHeaderComponent,
  AthmaPageHeaderComponent,
  UtilsHelperService,
  ArthaSortByDirective,
  ArthaSortDirective,
  RenderResourceURLSafePipe,
  KeyValueFilterPipe,
  FileSizeInBytesPipe,
  TimeBlockFilterPipe,
  AbsoluteValueFilterPipe,
  ArthaDateOfBirthPipe,
  ArthaTabFilterPipe,
  CapitalizePipe,
  DecimalConvertorPipe,
  LineItemNameFilterPipe,
  NameTrimFilterPipe,
  TruncateNumberPipe,
  RelativeTimeFilterPipe,
  RenderingHscMappingCategoryFilterPipe,
  SafePipe,
  TitleCaseSymbolPipe,
  TruncatePipe,
  DisableSidebarDirective,
  FocusDirective,
  PatternValidatorDirective,
  InputTrimmedDirective,
  IsLastDirective,
  ArthaClickOutsideDirective,
  ArthaScrollToDirective,
  AlphaNumericOnlyDirective,
  NameFormatDirective,
  AthmaStringToolTipComponent,
  ActiveAsStatusPipe,
  AthmaSwitchComponent,
  ArthaDetailHeaderComponent,
  ArthaDetailTapHeaderComponent,
  ArthaSearchComponent,
  AdvanceSearchComponent,
  AuditLogInfoComponent,
  DocumentUploadPopUpComponent,
  ArthaAmountDirective,
  ArthaDecimalDirective
} from './';
import { HeaderBreadcrumbComponent } from './header-breadcrumb/header-breadcrumb.component';
import { HeaderDialogBreadcrumbComponent } from './header-breadcrumb/header-dialog-breadcrumb.component';
import { SortPipe } from './pipes/sort.pipe';
import { ViewDetailsHeaderComponent } from './artha-headers/view-details-header/view-details-header.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    NgJhipsterModule.forRoot({
      i18nEnabled: true,
      defaultI18nLang: 'en'
    }),
    RouterModule,
    ArthaSharedModule,
    ClickOutsideModule,
    PerfectScrollbarModule,
    Daterangepicker
  ],
  declarations: [
    DialogComponent,
    AgeFromDateOfBirthPipe,
    HasAnyChildAuthoritiesDirective,
    UrlToTitlePipe,
    KeyValueFilterPipe,
    RenderHtmlSafePipe,
    AthmaStringManipulationComponent,
    AthmaStringToolTipComponent,
    AdvanceSearchComponent,
    AuditLogInfoComponent,
    InputDebounceComponent,
    ListHeaderComponent,
    ArthaDetailTapHeaderComponent,
    ArthaSearchComponent,
    AthmaPageHeaderComponent,
    ArthaSortDirective,
    ArthaSortByDirective,
    RenderResourceURLSafePipe,
    FileSizeInBytesPipe,
    TimeBlockFilterPipe,
    NumberOnlyDirective,
    AbsoluteValueFilterPipe,
    ArthaDateOfBirthPipe,
    ArthaTabFilterPipe,
    CapitalizePipe,
    DecimalConvertorPipe,
    LineItemNameFilterPipe,
    NameTrimFilterPipe,
    TruncateNumberPipe,
    RelativeTimeFilterPipe,
    RenderingHscMappingCategoryFilterPipe,
    SafePipe,
    TitleCaseSymbolPipe,
    TruncatePipe,
    ActiveAsStatusPipe,
    DisableSidebarDirective,
    FocusDirective,
    PatternValidatorDirective,
    InputTrimmedDirective,
    IsLastDirective,
    ArthaClickOutsideDirective,
    ArthaScrollToDirective,
    AlphaNumericOnlyDirective,
    NameFormatDirective,
    AthmaSwitchComponent,
    HeaderBreadcrumbComponent,
    HeaderDialogBreadcrumbComponent,
    ArthaDetailHeaderComponent,
    SortPipe,
    ViewDetailsHeaderComponent,
    DocumentUploadPopUpComponent,
    ArthaAmountDirective,
    ArthaDecimalDirective
  ],
  providers: [
    AthmaDateConverter,
    NavigationService,
    DialogService,
    SearchTermModify,
    SessionStorageService,
    LocalStorageService,
    UtilsHelperService
  ],
  entryComponents: [DialogComponent, DocumentUploadPopUpComponent],
  exports: [
    CommonModule,
    NgbModule,
    NgJhipsterModule,
    RouterModule,
    DialogComponent,
    AgeFromDateOfBirthPipe,
    HasAnyChildAuthoritiesDirective,
    UrlToTitlePipe,
    KeyValueFilterPipe,
    RenderHtmlSafePipe,
    AthmaStringManipulationComponent,
    AthmaStringToolTipComponent,
    AdvanceSearchComponent,
    AuditLogInfoComponent,
    InputDebounceComponent,
    ListHeaderComponent,
    ArthaDetailTapHeaderComponent,
    ArthaSearchComponent,
    AthmaPageHeaderComponent,
    NumberOnlyDirective,
    ArthaSortDirective,
    ArthaSortByDirective,
    RenderResourceURLSafePipe,
    FileSizeInBytesPipe,
    TimeBlockFilterPipe,
    AbsoluteValueFilterPipe,
    ArthaDateOfBirthPipe,
    ArthaTabFilterPipe,
    CapitalizePipe,
    DecimalConvertorPipe,
    LineItemNameFilterPipe,
    NameTrimFilterPipe,
    TruncateNumberPipe,
    RelativeTimeFilterPipe,
    RenderingHscMappingCategoryFilterPipe,
    SafePipe,
    TitleCaseSymbolPipe,
    TruncatePipe,
    ActiveAsStatusPipe,
    DisableSidebarDirective,
    FocusDirective,
    PatternValidatorDirective,
    InputTrimmedDirective,
    IsLastDirective,
    ArthaClickOutsideDirective,
    ArthaScrollToDirective,
    AlphaNumericOnlyDirective,
    NameFormatDirective,
    AthmaSwitchComponent,
    HeaderBreadcrumbComponent,
    HeaderDialogBreadcrumbComponent,
    ArthaDetailHeaderComponent,
    SortPipe,
    ViewDetailsHeaderComponent,
    DocumentUploadPopUpComponent,
    ArthaAmountDirective,
    ArthaDecimalDirective
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ArthaHelperModule {}