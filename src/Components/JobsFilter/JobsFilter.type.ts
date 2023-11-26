import uuidGenerator from "../../Utils/UuidGenerator";

type TYPE_OF_COOPERTION = "TYPE_OF_COOPERTION"; //!
type RIGHTS = "RIGHTS"; //!
type PUBLICATION_DATE = "PUBLICATION_DATE"; //!
type WORK_EXPERIENCE = "WORK_EXPERIENCE"; //!
type SENIORITY_LEVEL = "SENIORITY_LEVEL"; //!
type BENEFITS_AND_FACILITIES = "BENEFITS_AND_FACILITIES"; //!

type TELECOMMUTING = "TELECOMMUTING";
type INTERSHIP = "INTERSHIP";
type IS_EMPLOYMENT_OF_THE_DISABLED = "IS_EMPLOYMENT_OF_THE_DISABLED";
type MILITARY_ORDER = "MILITARY_ORDER";

export type TYPE_OF_COOPERTION_FULL_TIME = "TYPE_OF_COOPERTION_FULL_TIME";
export type TYPE_OF_COOPERTION_CONTRACTUAL_TIME = "TYPE_OF_COOPERTION_CONTRACTUAL_TIME";
export type TYPE_OF_COOPERTION_PART_TIME = "TYPE_OF_COOPERTION_PART_TIME";

type WORK_EXPERIENCE_UNDER_2_YR = "WORK_EXPERIENCE_UNDER_2_YR";
type WORK_EXPERIENCE_AMONG_2_5_YR = "WORK_EXPERIENCE_AMONG_2_5_YR";
type WORK_EXPERIENCE_AMONG_5_8_YR = "WORK_EXPERIENCE_AMONG_5_8_YR";
type WORK_EXPERIENCE_AMONG_8_12_YR = "WORK_EXPERIENCE_AMONG_8_12_YR";
type WORK_EXPERIENCE_OVER_12_YR = "WORK_EXPERIENCE_OVER_12_YR";

type SENIORITY_LEVEL_MANUAL_WORKER = "SENIORITY_LEVEL_MANUAL_WORKER";
type SENIORITY_LEVEL_EMPLOYEE = "SENIORITY_LEVEL_EMPLOYEE";
type SENIORITY_LEVEL_EXPERT = "SENIORITY_LEVEL_EXPERT";
type SENIORITY_LEVEL_MA = "SENIORITY_LEVEL_MA";
type SENIORITY_LEVEL_MID_LEVEL_MANAGER = "SENIORITY_LEVEL_MID_LEVEL_MANAGER";
type SENIORITY_LEVEL_ASSISTANCE = "SENIORITY_LEVEL_ASSISTANCE";
type SENIORITY_LEVEL_CHIEF = "SENIORITY_LEVEL_CHIEF";

type BENEFITS_AND_FACILITIES_LOAN = "BENEFITS_AND_FACILITIES_LOAN";
type BENEFITS_AND_FACILITIES_REWARD = "BENEFITS_AND_FACILITIES_REWARD";
type BENEFITS_AND_FACILITIES_PARKING = "BENEFITS_AND_FACILITIES_PARKING";

export type CategoryTypes =
    | TYPE_OF_COOPERTION
    | RIGHTS
    | PUBLICATION_DATE
    | WORK_EXPERIENCE
    | SENIORITY_LEVEL
    | BENEFITS_AND_FACILITIES;

export type FiltreTypes =
    | TELECOMMUTING
    | INTERSHIP
    | IS_EMPLOYMENT_OF_THE_DISABLED
    | MILITARY_ORDER
    | TYPE_OF_COOPERTION_FULL_TIME
    | TYPE_OF_COOPERTION_CONTRACTUAL_TIME
    | TYPE_OF_COOPERTION_PART_TIME
    | WORK_EXPERIENCE_UNDER_2_YR
    | WORK_EXPERIENCE_AMONG_2_5_YR
    | WORK_EXPERIENCE_AMONG_5_8_YR
    | WORK_EXPERIENCE_AMONG_8_12_YR
    | WORK_EXPERIENCE_OVER_12_YR
    | SENIORITY_LEVEL_MANUAL_WORKER
    | SENIORITY_LEVEL_EMPLOYEE
    | SENIORITY_LEVEL_EXPERT
    | SENIORITY_LEVEL_MA
    | SENIORITY_LEVEL_MID_LEVEL_MANAGER
    | SENIORITY_LEVEL_ASSISTANCE
    | SENIORITY_LEVEL_CHIEF
    | BENEFITS_AND_FACILITIES_LOAN
    | BENEFITS_AND_FACILITIES_REWARD
    | BENEFITS_AND_FACILITIES_PARKING;

export type categoryFilterArray = FiltreTypes;

export type ChildOfFilterType = {
    id: string;
    title: string;
    type: categoryFilterArray;
    category: CategoryTypes;
};

export interface FilterType {
    id: string;
    title: string;
    type?: categoryFilterArray;
    isMultiple: boolean;
    sub?: ChildOfFilterType | ChildOfFilterType[];
    category?: CategoryTypes;
}

const categoryArray: FilterType[] = [
    { id: uuidGenerator(), type: "TELECOMMUTING", title: "دورکاری", isMultiple: false },
    { id: uuidGenerator(), type: "INTERSHIP", title: "کارآموزی", isMultiple: false },
    {
        id: uuidGenerator(),
        title: "نوع همکاری",
        category: "TYPE_OF_COOPERTION",
        isMultiple: false,
        sub: [
            {
                id: uuidGenerator(),
                category: "TYPE_OF_COOPERTION",
                title: "تمام وقت",
                type: "TYPE_OF_COOPERTION_FULL_TIME",
            },
            {
                id: uuidGenerator(),
                category: "TYPE_OF_COOPERTION",
                title: "نیمه وقت",
                type: "TYPE_OF_COOPERTION_PART_TIME",
            },
            {
                id: uuidGenerator(),
                category: "TYPE_OF_COOPERTION",
                title: "قراردای / پروژه ای",
                type: "TYPE_OF_COOPERTION_CONTRACTUAL_TIME",
            },
        ],
    },

    {
        id: uuidGenerator(),
        category: "WORK_EXPERIENCE",
        title: "سابقه کاری",
        isMultiple: false,
        sub: [
            {
                id: uuidGenerator(),
                category: "WORK_EXPERIENCE",
                title: "کمتر از 2 سال",
                type: "WORK_EXPERIENCE_UNDER_2_YR",
            },
            {
                id: uuidGenerator(),
                category: "WORK_EXPERIENCE",
                title: "بین 2 تا 5 سال",
                type: "WORK_EXPERIENCE_AMONG_2_5_YR",
            },
            {
                id: uuidGenerator(),
                category: "WORK_EXPERIENCE",
                title: "بین 5 تا 8 سال",
                type: "WORK_EXPERIENCE_AMONG_5_8_YR",
            },
            {
                id: uuidGenerator(),
                category: "WORK_EXPERIENCE",
                title: "بین 8 تا 12 سال",
                type: "WORK_EXPERIENCE_AMONG_8_12_YR",
            },
            {
                id: uuidGenerator(),
                category: "WORK_EXPERIENCE",
                title: "بالای 12 سال",
                type: "WORK_EXPERIENCE_OVER_12_YR",
            },
        ],
    },
    {
        id: uuidGenerator(),
        category: "SENIORITY_LEVEL",
        title: "سطح ارشدیت",
        isMultiple: false,
        sub: [
            {
                id: uuidGenerator(),
                category: "SENIORITY_LEVEL",
                title: "کارگر",
                type: "SENIORITY_LEVEL_MANUAL_WORKER",
            },
            { id: uuidGenerator(), category: "SENIORITY_LEVEL", title: "کارمند", type: "SENIORITY_LEVEL_EMPLOYEE" },
            { id: uuidGenerator(), category: "SENIORITY_LEVEL", title: "کارشناس", type: "SENIORITY_LEVEL_EXPERT" },
            { id: uuidGenerator(), category: "SENIORITY_LEVEL", title: "کارشناس ارشد", type: "SENIORITY_LEVEL_MA" },
            {
                id: uuidGenerator(),
                category: "SENIORITY_LEVEL",
                title: "مدیر میانی",
                type: "SENIORITY_LEVEL_MID_LEVEL_MANAGER",
            },
            { id: uuidGenerator(), category: "SENIORITY_LEVEL", title: "معاونت", type: "SENIORITY_LEVEL_ASSISTANCE" },
            { id: uuidGenerator(), category: "SENIORITY_LEVEL", title: "مدیرارشد", type: "SENIORITY_LEVEL_CHIEF" },
        ],
    },
    {
        id: uuidGenerator(),
        category: "BENEFITS_AND_FACILITIES",
        title: "مزایا و تسهیلات",
        isMultiple: true,
        sub: [
            {
                id: uuidGenerator(),
                category: "BENEFITS_AND_FACILITIES",
                title: "وام",
                type: "BENEFITS_AND_FACILITIES_LOAN",
            },
            {
                id: uuidGenerator(),
                category: "BENEFITS_AND_FACILITIES",
                title: "پاداش",
                type: "BENEFITS_AND_FACILITIES_REWARD",
            },
            {
                id: uuidGenerator(),
                category: "BENEFITS_AND_FACILITIES",
                title: "پارکینگ",
                type: "BENEFITS_AND_FACILITIES_PARKING",
            },
        ],
    },
    {
        id: uuidGenerator(),
        type: "IS_EMPLOYMENT_OF_THE_DISABLED",
        title: "امکان استخدام معلولین",
        isMultiple: false,
    },
    { id: uuidGenerator(), type: "MILITARY_ORDER", title: "امریه سربازی", isMultiple: false },
];

export interface JobsFilterProps {
    setSelectedFilter: React.Dispatch<React.SetStateAction<string[]>>;
    isFilterOnProMode: boolean;
    setIsFilterOnProMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface selectedFiltersType {
    title: string;
    type: string;
    category: string;
}

export type removeFilterActionTypes =
    | { mode: "RemoveType"; mainType: string; isClose: boolean }
    | { mode: "RemoveCategory"; mainType: string; isClose: boolean };

export type isDublicateTypes =
    | { mode: "FilterType"; ItemType: categoryFilterArray | undefined }
    | { mode: "CategoryType"; ItemType: CategoryTypes | undefined };

export type FilterContentGeneratorProps =
    | { mode: "SUB_FALSE_MULTIPLE_FALSE"; ItemType: FilterType }
    | { mode: "SUB_TRUE_MULTIPLE_FALSE"; ItemType: CategoryTypes }
    | { mode: "SUB_&_MULTIPLE_TRUE"; Item: FilterType; ItemType: CategoryTypes }
    | { mode: "NORMAL"; Item: FilterType };

export type FilterGeneratorProps =
    | {
          mode: "ShowFilter";
          item: FilterType;
      }
    | {
          mode: "ShowFilterIcon";
      };

export type MenuSettingProps = {
    mode: "Mobile" | "Desktop";
};
export { categoryArray };
