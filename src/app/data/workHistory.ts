import { WorkHistory } from "@models/common/workHistory.model";
import { STRAYOS_ARCHITECT_DESCRIPTION, STRAYOS_CLI_DESCRIPTION, STRAYOS_CI_DESCRIPTION, STRAYOS_REFACTOR_DESCRIPTION, STRAYOS_GIS_DESCRIPTION, STRAYOS_IMAGE_DESCRIPTION, STRAYOS_TEACHER_DESCRIPTION } from "@data/workHistoryDescriptions";

export const StrayosHistory: WorkHistory = {
    company: 'Strayos Inc.',
    location: 'St. Louis',
    title: 'Senior Engineer',
    descriptions: [
        {
            summary: 'Head Architect',
            text: [STRAYOS_ARCHITECT_DESCRIPTION],
        },
        {
            summary: 'CLI Developer',
            text: [STRAYOS_CLI_DESCRIPTION],
        },
        {
            summary: 'CD/CI pipeline builder',
            text: [STRAYOS_CI_DESCRIPTION],
        },
        {
            summary: 'Decimator of Technical Debt',
            text: [STRAYOS_REFACTOR_DESCRIPTION],
        },
        {
            summary: 'Geospatial Information Visionary',
            text: [STRAYOS_GIS_DESCRIPTION],
        },
        {
            summary: 'Cloud Systems Engineer',
            text: [STRAYOS_IMAGE_DESCRIPTION],
        },
        {
            summary: 'In house Guru',
            text: [STRAYOS_TEACHER_DESCRIPTION],
        }
    ],
    from: new Date('June 1, 2017')
}

export const CompleteWorkHistory = [
    StrayosHistory,
]