import { PATH_ROUTE } from '@constants/pathRoute';
import AdminApproveContainer from '@containers/Admin/AdminApprove';
import AllocationContainers from '@containers/Admin/Allocation';
import ManagePosition from '@containers/Admin/CRUDPosition';
import ManageRole from '@containers/Admin/CRUDRole';
import ManagePositionHr from '@containers/Admin/CRUDUserPosition';
import CompareProjectContainer from '@containers/Admin/CompareProject';
import ConfigsContainer from '@containers/Admin/Configs';
import CostByProjectContainer from '@containers/Admin/CostByProject';
import HomeContainer from '@containers/Admin/Dashboard/index';
import ELearningHr from '@containers/Admin/ELearningHr/index';
import Department from '@containers/Admin/Department';
import DetailTimeKeepingHr from '@containers/Admin/DetailTimeKeepingHr';
import ProjectContainer from '@containers/Admin/Project/index';
import projectReportBonusQAContainer from '@containers/Admin/ProjectBonusReportQA';
import ProjectBonusReportSettingContainers from '@containers/Admin/ProjectBonusReportSetting';
import ProjectCostsContainer from '@containers/Admin/ProjectCosts';
import ProjectLostContainer from '@containers/Admin/ProjectLost';
import projectReportContainers from '@containers/Admin/ProjectReport';
import RatioForManager from '@containers/Admin/RatioForManager';
import ReportCostStaffsContainer from '@containers/Admin/ReportCostStaffs/index';
import ReportStatusContainer from '@containers/Admin/ReportStatus';
import Salaries from '@containers/Admin/Salaries';
import Setting from '@containers/Admin/Setting';
import SettingManager from '@containers/Admin/SettingManager';
import Reporter from '@containers/Admin/SettingReporter';
import StaffComplaintContainer from '@containers/Admin/StaffComplaint';
import StaffComplaintGeneral from '@containers/Admin/StaffComplaintGeneral';
import StaffDetailTimeKeeping from '@containers/Admin/StaffDetailTimeKeeping';
import StaffDetailTimeKeepingManager from '@containers/Admin/StaffDetailTimeKeepingManager';
import StaffForAdminContainers from '@containers/Admin/StaffForAdmin/index';
import StaffForManagerContainers from '@containers/Admin/StaffForManager/index';
import StaffProjectBonus from '@containers/Admin/StaffProjectBonus';
import StaffSenioritiesContainer from '@containers/Admin/StaffSeniorities';
import StaffTimeKeepingForManager from '@containers/Admin/StaffTimeKeepingForManager';
import StaffTimeKeepingContainer from '@containers/Admin/StaffTimeKeepings/index';
import StaffContainer from '@containers/Admin/Staffs/index';
import TimesKeepingHolidays from '@containers/Admin/TimesKeepingHolidays';
import TimesheetGeneralContainer from '@containers/Admin/TimesheetGeneral';
import TimesheetsContainer from '@containers/Admin/Timesheets';
import UploadDataHr from '@containers/Admin/UploadDataHr';
// import OtTimesheetGeneral from '@containers/Admin/OtTimesheetGeneral';
import OtTimesheetGeneralContainer from '@containers/Admin/OtTimesheetGeneral';
import Revenue from '@containers/Admin/Revenue';
import PLReport from '@containers/Admin/PLReport';
import PLReportDetail from '@containers/Admin/PLReportDetail';
import SettingPL from '@containers/Admin/PLSetting';
import PLInvoiceAccount from '@containers/Admin/PLInvoiceAccount';
import PLInvoiceManager from '@containers/Admin/PLInvoiceManager';
// import ApplicationApproval from '@containers/Admin/ApplicationApproval';
import ELearning from '@containers/Admin/ELearning';
export const ASC = 'asc';
export const DESC = 'desc';
export const CREATED_AT = 'createdAt';
export const LIMIT = 10;
export const VISIBLE = 'visible';

export const ADMIN_ROUTES = [
    {
        id: 1,
        pathRoute: PATH_ROUTE.dashboard,
        name: 'Trang quản trị',
        exact: true,
        component: HomeContainer,
        module: 'admin',
    },
    {
        id: 2,
        pathRoute: PATH_ROUTE.project,
        name: 'Trang danh sách dự án',
        exact: true,
        component: ProjectContainer,
        module: 'admin',
    }
    , {
        id: 3,
        pathRoute: PATH_ROUTE.compareProject,
        name: 'Trang so sánh dự án',
        exact: true,
        component: CompareProjectContainer,
        module: 'admin',
    },
    {
        id: 4,
        pathRoute: PATH_ROUTE.staffs,
        name: 'Danh sách nhân viên',
        exact: true,
        component: StaffContainer,
        module: 'admin',
    },
    {
        id: 5,
        pathRoute: PATH_ROUTE.staffTimeKeepings,
        name: 'Tổng hợp chấm công',
        exact: true,
        component: StaffTimeKeepingContainer,
        module: 'admin',
    },
    {
        id: 6,
        pathRoute: PATH_ROUTE.ReportCostStaffs,
        name: 'Báo cáo chi phí nhân sự',
        exact: true,
        component: ReportCostStaffsContainer,
        module: 'admin',
    },
    {
        id: 7,
        pathRoute: PATH_ROUTE.department,
        name: 'Danh sách phòng ban',
        exact: true,
        component: Department,
        module: 'admin',
    },
    {
        id: 8,
        pathRoute: PATH_ROUTE.projectLost,
        name: 'Chi phí nhân sự theo dự án',
        exact: true,
        component: ProjectLostContainer,
        module: 'admin',
    },
    {
        id: 9,
        pathRoute: PATH_ROUTE.manageRole,
        name: 'Quyền hệ thống',
        exact: true,
        component: ManageRole,
        module: 'admin',
    },
    {
        id: 10,
        pathRoute: PATH_ROUTE.managePosition,
        name: 'Danh sách vị trí',
        exact: true,
        component: ManagePosition,
        module: 'admin',
    },
    {
        id: 11,
        pathRoute: PATH_ROUTE.salaries,
        name: 'Lương',
        exact: true,
        component: Salaries,
        module: 'admin',
    },
    {
        id: 12,
        pathRoute: PATH_ROUTE.allocation,
        name: 'CPPB đầu người',
        exact: true,
        component: AllocationContainers,
        module: 'admin',
    }
    , {
        id: 13,
        pathRoute: PATH_ROUTE.configs,
        name: 'Cấu hình',
        exact: true,
        component: ConfigsContainer,
        module: 'admin',
    }, {
        id: 14,
        pathRoute: PATH_ROUTE.reportStatus,
        name: 'Tổng hợp trạng thái chốt số',
        exact: true,
        component: ReportStatusContainer,
        module: 'admin',
    }, {
        id: 15,
        pathRoute: PATH_ROUTE.projectCost,
        name: 'Chi phí nhân sự',
        exact: true,
        component: ProjectCostsContainer,
        module: 'admin',
    }, {
        id: 16,
        pathRoute: PATH_ROUTE.costByProject,
        name: 'CP theo dự án',
        exact: true,
        component: CostByProjectContainer,
        module: 'admin',
    }, {
        id: 18,
        pathRoute: PATH_ROUTE.positionRoleApproval,
        name: 'PD quyền hệ thống',
        exact: true,
        component: AdminApproveContainer,
        module: 'admin',
    }, {
        id: 19,
        pathRoute: PATH_ROUTE.timeKeepingMe,
        name: 'Bảng công của tôi',
        exact: true,
        component: TimesheetsContainer,
        module: 'admin',
    }, {
        id: 20,
        pathRoute: PATH_ROUTE.staffSenioritiesByHr,
        name: 'Nghỉ phép',
        exact: true,
        component: TimesKeepingHolidays,
        module: 'admin',
    }, {
        id: 21,
        pathRoute: PATH_ROUTE.timeKeepingsSettings,
        name: 'Cài đặt chấm công',
        exact: true,
        component: Setting,
        module: 'admin',
    }, {
        id: 22,
        pathRoute: PATH_ROUTE.timeSheetsHR,
        name: 'Bảng công cho HR',
        exact: true,
        component: TimesheetGeneralContainer,
        module: 'admin',
    }, {
        id: 23,
        pathRoute: PATH_ROUTE.timeSheetsManager,
        name: 'Bảng công cho Manager',
        exact: true,
        component: TimesheetGeneralContainer,
        module: 'admin',
    }, {
        id: 24,
        pathRoute: PATH_ROUTE.staffComplaint,
        name: 'Đơn từ của tôi',
        exact: true,
        component: StaffComplaintContainer,
        module: 'admin',
    },
    {
        id: 25,
        pathRoute: PATH_ROUTE.staffComplaintByManager,
        name: 'Đơn từ tôi duyệt',
        exact: true,
        component: StaffComplaintGeneral,
        module: 'admin',
    }, {
        id: 26,
        pathRoute: PATH_ROUTE.staffComplaintByHR,
        name: 'Đơn từ chung',
        exact: true,
        component: StaffComplaintGeneral,
        module: 'admin',

    },
    {
        id: 27,
        pathRoute: PATH_ROUTE.staffForManager,
        name: 'Nhân sự cho quản lý',
        exact: true,
        component: StaffForManagerContainers,
        module: 'admin',
    },
    {
        id: 28,
        pathRoute: PATH_ROUTE.staffSeniorities,
        name: 'Nghỉ phép',
        exact: true,
        component: StaffSenioritiesContainer,
        module: 'admin',
    },
    {
        id: 29,
        pathRoute: PATH_ROUTE.staffTimeKeepingsManager,
        name: 'Tông hợp công cho quản lý',
        exact: true,
        component: StaffTimeKeepingForManager,
        module: 'admin',
    },
    {
        id: 30,
        pathRoute: PATH_ROUTE.projectBonusReportManager,
        name: 'Xem project bonus report (Manger)',
        exact: true,
        component: projectReportContainers,
        module: 'admin',
    },
    {
        id: 31,
        pathRoute: PATH_ROUTE.projectBonusReport,
        name: 'Upload file quyền (Manger)',
        exact: true,
        component: projectReportBonusQAContainer,
        module: 'admin',
    },
    {
        id: 32,
        pathRoute: PATH_ROUTE.projectBonusReportSetting,
        name: 'Setting',
        exact: true,
        component: ProjectBonusReportSettingContainers,
        module: 'admin',
    },
    {
        id: 33,
        pathRoute: PATH_ROUTE.ratioForManager,
        name: 'Setting',
        exact: true,
        component: RatioForManager,
        module: 'admin',
    },
    {
        id: 34,
        pathRoute: PATH_ROUTE.staffForAdmin,
        name: 'Danh sách nhân viên',
        exact: true,
        component: StaffForAdminContainers,
        module: 'admin',
    },
    {
        id: 35,
        pathRoute: PATH_ROUTE.managePositionHr,
        name: 'Cấu hình vị trí',
        exact: true,
        component: ManagePositionHr,
        module: 'admin',
    },
    {
        id: 36,
        pathRoute: PATH_ROUTE.managePositionHr,
        name: 'Cấu hình vị trí',
        exact: true,
        component: ManagePositionHr,
        module: 'admin',
    },
    {
        id: 37,
        pathRoute: PATH_ROUTE.departmentHr,
        name: 'Cơ cấu tổ chức',
        exact: true,
        component: Department,
        module: 'admin',
    },
    {
        id: 38,
        pathRoute: PATH_ROUTE.compensationTimeKeepingHR,
        name: 'Bù công Hr',
        exact: true,
        component: DetailTimeKeepingHr,
        module: 'admin',
    },
    {
        id: 39,
        pathRoute: PATH_ROUTE.compensationTimeKeepingManager,
        name: 'Bù công Manager',
        exact: true,
        component: DetailTimeKeepingHr,
        module: 'admin',
    },
    {
        id: 40,
        pathRoute: PATH_ROUTE.staffProjectBonus,
        name: 'Thưởng của User',
        exact: true,
        component: StaffProjectBonus,
        module: 'admin',
    },
    {
        id: 41,
        pathRoute: PATH_ROUTE.reporter,
        name: 'Phân quyền HR',
        exact: true,
        component: Reporter,
        module: 'admin',
    },
    {
        id: 42,
        pathRoute: PATH_ROUTE.timeKeepingsSettingManagers,
        name: 'Cài đặt chấm công manager',
        exact: true,
        component: SettingManager,
        module: 'admin',
    },
    {
        id: 43,
        pathRoute: PATH_ROUTE.otTimeManager,
        name: 'Bảng OT cho Manager',
        exact: true,
        component: OtTimesheetGeneralContainer,
        module: 'admin',
    },
    {
        id: 44,
        pathRoute: PATH_ROUTE.otTimeHr,
        name: 'Bảng OT cho HR',
        exact: true,
        component: OtTimesheetGeneralContainer,
        module: 'admin',
    },
    {
        id: 45,
        pathRoute: PATH_ROUTE.staffDetailTimeKeeping,
        name: 'Chấm công',
        exact: true,
        component: StaffDetailTimeKeeping,
        module: 'admin',
    },
    {
        id: 46,
        pathRoute: PATH_ROUTE.staffTimekeepingManager,
        name: 'Chấm công',
        exact: true,
        component: StaffDetailTimeKeepingManager,
        module: 'admin',
    },
    {
        id: 47,
        pathRoute: PATH_ROUTE.staffTimekeepingHr,
        name: 'Chấm công',
        exact: true,
        component: StaffDetailTimeKeepingManager,
        module: 'admin',
    },
    {
        id: 48,
        pathRoute: PATH_ROUTE.uploadDataHr,
        name: 'Upload Data',
        exact: true,
        component: UploadDataHr,
        module: 'admin',
    },
    {
        id: 49,
        pathRoute: PATH_ROUTE.revenue,
        name: 'Revenue',
        exact: true,
        component: Revenue,
        module: 'admin',
    },
    {
        id: 50,
        pathRoute: PATH_ROUTE.plReportDept,
        name: 'plReportDept',
        exact: true,
        component: PLReport,
        module: 'admin',
    },
    {
        id: 51,
        pathRoute: PATH_ROUTE.plReportProject,
        name: 'plReportProject',
        exact: true,
        component: PLReport,
        module: 'admin',
    },
    {
        id: 52,
        pathRoute: PATH_ROUTE.plReportDeptDetail,
        name: 'plReportDeptDetail',
        exact: true,
        component: PLReportDetail,
        module: 'admin',
    },
    {
        id: 53,
        pathRoute: PATH_ROUTE.plReportProjectDetail,
        name: 'plReportProjectDetail',
        exact: true,
        component: PLReportDetail,
        module: 'admin',
    },
    {
        id: 54,
        pathRoute: PATH_ROUTE.settingPL,
        name: 'settingPL',
        exact: true,
        component: SettingPL,
        module: 'admin',
    },
    {
        id: 55,
        pathRoute: PATH_ROUTE.plInvoiceAccount,
        name: 'plInvoiceAccount',
        exact: true,
        component: PLInvoiceAccount,
        module: 'admin',
    },
    {
        id: 56,
        pathRoute: PATH_ROUTE.plInvoiceManager,
        name: 'plInvoiceManager',
        exact: true,
        component: PLInvoiceManager,
        module: 'admin',
    },
    {
        id: 57,
        pathRoute: PATH_ROUTE.eLearningHr,
        name: 'E-Learning-HR',
        exact: true,
        component: ELearningHr,
        module: 'eLearning',
    },
    {
        pathRoute: PATH_ROUTE.eLearning,
        name: 'eLearning',
        exact: true,
        component: ELearning,
        module: 'admin',
    }
];


//token
export const TOKEN = 'TOKEN';

//status code
export const STATUS_CODE = {
    SUCCESS: 200,
    CREATED: 201,
    UPDATED: 202,
};
export const STATUS_ACTION = {
    ADD: 'ADD',
    EDIT: 'EDIT',
    DETAIL: 'DETAIL',
    DELETE: 'DELETE',
    CLONE: 'CLONE',
    UPLOAD: 'UPLOAD'
};

export const TYPE_FILTER = {
    refresh: 'refresh',
    reset: 'reset',
    submit: 'submit',
    search: 'search',
    limit: 'limit',
    initial: 'initial',
    pagination: 'pagination',
    filter: 'filter',
    sort: 'sortBy',
};

export const STATUS_PERMISSION = {
    allow: 'Allow',
    deny: 'Deny',
};


export const USER_STATUS = {
    Official: 'Đang làm',
    Inactivity: 'Nghỉ việc',
    Probation: 'Đang làm',
    CTV: 'CTV',
    Intern: 'Học việc',
    Onsite: 'Thuê ngoài'
};

export const LANGUAGE = {
    vi: 'vi',
    en: 'en',
};

export const optionsLocale = {
    vi: 'vi-VN',
    en: 'en-US',
};

export const shortenTextStyles = {
    fs: 'fontSize',
    fw: 'fontWeight',
};

export const positionItems = {
    center: 'center',
    middle: 'center',
    left: 'flex-start',
    top: 'flex-start',
    right: 'flex-end',
    bottom: 'flex-end',
    xBetween: 'space-between',
    yBetween: 'space-between',
    xAround: 'space-around',
    yAround: 'space-around',
};

export const shortenViewStyles = {
    top: 'top',
    lef: 'left',
    rig: 'right',
    bot: 'bottom',

    mg: 'margin',
    mt: 'marginTop',
    mb: 'marginBottom',
    ml: 'marginLeft',
    mr: 'marginRight',
    mx: 'marginHorizontal',
    my: 'marginVertical',

    pd: 'padding',
    pt: 'paddingTop',
    pb: 'paddingBottom',
    pl: 'paddingLeft',
    pr: 'paddingRight',
    px: 'paddingHorizontal',
    py: 'paddingVertical',

    bd: 'borderWidth',
    bt: 'borderTopWidth',
    bb: 'borderBottomWidth',
    bl: 'borderLeftWidth',
    br: 'borderRightWidth',

    rad: 'borderRadius',
    rtl: 'borderTopLeftRadius',
    rtr: 'borderTopRightRadius',
    rbl: 'borderBottomLeftRadius',
    rbr: 'borderBottomRightRadius',

    wi: 'width',
    he: 'height',
    wh: 'width',
    hw: 'height',

    fl: 'flex',
    zi: 'zIndex',
    op: 'opacity',
};

export const TYPE_BUTTON = {
    PRIMARY: 'PRIMARY',
    SECONDARY: 'SECONDARY',
    CANCEL: 'CANCEL',
};

export const SIZE_BUTTON = {
    BIG_SIZE: 'BIG_SIZE',
    NORMAL: 'NORMAL',
};

export const FOR_ENTITY_TYPE_NOTIFICATION = {
    STAFF_COMPLAINTS: PATH_ROUTE?.staffComplaintByManager, // đơn phản hồi
    STAFF_ATTENDANCES: PATH_ROUTE?.staffComplaintByManager, // đơn nghỉ phép
    Approved: PATH_ROUTE?.timeKeepingMe,
    Refused: PATH_ROUTE?.staffComplaint,
    Pending: PATH_ROUTE?.staffComplaint,
};

export const COURSE_TYPE = {
    OFFLINE: 'Offline',
    ONLINE: 'Online',
    CERTIFICATE: 'Certificate',
};

export const COURSE_STATUS  = {
    Complete: 'Hoàn thành',
    NotComplete: 'Chưa hoàn thành',
};
