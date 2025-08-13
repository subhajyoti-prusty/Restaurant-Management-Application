import { NgModule } from '@angular/core';

// Layout & Navigation
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzAffixModule } from 'ng-zorro-antd/affix';

// Data Entry
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzFormModule } from 'ng-zorro-antd/form';

// Data Display
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
// import { NzTooltipModule } from 'ng-zorro-antd/tooltip';
import { NzTreeModule } from 'ng-zorro-antd/tree';

// Feedback
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpinModule } from 'ng-zorro-antd/spin';

// Navigation
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzStepsModule } from 'ng-zorro-antd/steps';

// Buttons
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

// Others
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzWaveModule } from 'ng-zorro-antd/core/wave';
import { NzResizeObserverModule } from 'ng-zorro-antd/cdk/resize-observer';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';
// import { NzConfigProviderModule } from 'ng-zorro-antd/core/config';

@NgModule({
  exports: [
    // Layout & Nav
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzAnchorModule,
    NzAffixModule,

    // Data Entry
    NzInputModule,
    NzInputNumberModule,
    NzAutocompleteModule,
    NzSelectModule,
    NzTreeSelectModule,
    NzCheckboxModule,
    NzRadioModule,
    NzSwitchModule,
    NzSliderModule,
    NzRateModule,
    NzTransferModule,
    NzUploadModule,
    NzCascaderModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzFormModule,

    // Data Display
    NzAvatarModule,
    NzBadgeModule,
    NzCommentModule,
    NzCollapseModule,
    NzCarouselModule,
    NzCardModule,
    NzDescriptionsModule,
    NzEmptyModule,
    NzListModule,
    NzPopoverModule,
    NzStatisticModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzTimelineModule,
    //   NzTooltipModule,
    NzTreeModule,

    // Feedback
    NzAlertModule,
    NzDrawerModule,
    NzMessageModule,
    NzModalModule,
    NzNotificationModule,
    NzPopconfirmModule,
    NzProgressModule,
    NzResultModule,
    NzSkeletonModule,
    NzSpinModule,

    // Navigation
    NzPaginationModule,
    NzStepsModule,

    // Buttons & Misc
    NzButtonModule,
    NzDropDownModule,
    NzDividerModule,
    NzSpaceModule,
    NzBackTopModule,
    NzWaveModule,
    NzResizeObserverModule,
    NzToolTipModule,
    NzIconModule,
    //   NzConfigProviderModule,
  ],
})
export class NgZorroModule {}
