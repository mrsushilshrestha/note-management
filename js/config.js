/**
 * Configuration file for BIT Notes Portal
 * Contains links to Google Drive folders and Pokhara University notices
 */

const CONFIG = {
    // Google Drive folder links for each semester
    driveLinks: {
        // 1st Semester
        1: {
            notes: "https://drive.google.com/drive/folders/1ptaQywdYYmuSKfWfk58_LFSg3N2rnv1P?usp=drive_link",
            pastQuestions: "https://drive.google.com/drive/folders/1ptaQywdYYmuSKfWfk58_LFSg3N2rnv1P?usp=drive_link",
            syllabus: "https://drive.google.com/drive/folders/1ptaQywdYYmuSKfWfk58_LFSg3N2rnv1P?usp=drive_link"
        },
        // 2nd Semester
        2: {
            notes: "https://drive.google.com/drive/folders/2xxxxxxxxxxxxxxxx",
            pastQuestions: "https://drive.google.com/drive/folders/2xxxxxxxxxxxxxxxx",
            syllabus: "https://drive.google.com/drive/folders/2xxxxxxxxxxxxxxxx"
        },
        // 3rd Semester
        3: {
            notes: "https://drive.google.com/drive/folders/3xxxxxxxxxxxxxxxx",
            pastQuestions: "https://drive.google.com/drive/folders/3xxxxxxxxxxxxxxxx",
            syllabus: "https://drive.google.com/drive/folders/3xxxxxxxxxxxxxxxx"
        },
        // 4th Semester
        4: {
            notes: "https://drive.google.com/drive/folders/4xxxxxxxxxxxxxxxx",
            pastQuestions: "https://drive.google.com/drive/folders/4xxxxxxxxxxxxxxxx",
            syllabus: "https://drive.google.com/drive/folders/4xxxxxxxxxxxxxxxx"
        },
        // 5th Semester
        5: {
            notes: "https://drive.google.com/drive/folders/5xxxxxxxxxxxxxxxx",
            pastQuestions: "https://drive.google.com/drive/folders/5xxxxxxxxxxxxxxxx",
            syllabus: "https://drive.google.com/drive/folders/5xxxxxxxxxxxxxxxx"
        },
        // 6th Semester
        6: {
            notes: "https://drive.google.com/drive/folders/1hCOYWYCUcO0MlsNE1hnUWMA443NJWZn3?usp=drive_link",
            pastQuestions: "https://drive.google.com/drive/folders/1JkHluKhZpVH3gBl59fycr2VI8cKdyEDj?usp=drive_link",
            syllabus: "https://drive.google.com/drive/folders/10qX4ts5aJ81OaRmwT_F4mOL-es3eVQ0J?usp=drive_link"
        },
        // 7th Semester
        7: {
            notes: "https://drive.google.com/drive/folders/7xxxxxxxxxxxxxxxx",
            pastQuestions: "https://drive.google.com/drive/folders/7xxxxxxxxxxxxxxxx",
            syllabus: "https://drive.google.com/drive/folders/7xxxxxxxxxxxxxxxx"
        },
        // 8th Semester
        8: {
            notes: "https://drive.google.com/drive/folders/8xxxxxxxxxxxxxxxx",
            pastQuestions: "https://drive.google.com/drive/folders/8xxxxxxxxxxxxxxxx",
            syllabus: "https://drive.google.com/drive/folders/8xxxxxxxxxxxxxxxx"
        }
    },
    
    // Pokhara University notice links
    puLinks: {
        examSchedule: "https://pu.edu.np/exam-schedule",
        results: "https://pu.edu.np/results",
        registration: "https://pu.edu.np/registration",
        notices: "https://pu.edu.np/notices"
    },
    
    // Gallery images from Google Drive
    galleryImages: [
        "https://drive.google.com/uc?export=view&id=1xxxxxxxxxxxxxxxx",
        "https://drive.google.com/uc?export=view&id=2xxxxxxxxxxxxxxxx",
        "https://drive.google.com/uc?export=view&id=3xxxxxxxxxxxxxxxx",
        "https://drive.google.com/uc?export=view&id=4xxxxxxxxxxxxxxxx"
    ],
    
    // Advertisement banners
    adBanners: [
        "assets/images/ad-banner1.jpg",
        "assets/images/ad-banner2.jpg"
    ],
    
    // News items - for easy management
    newsItems: [
        {
            date: 'June 16,2025',
            title: 'BIT Exam Schedule',
            content: 'The examination schedule for BIT has been announced. Check the official PU website for details.',
            link: 'https://puexam.edu.np/exam-schedule-new#',
            category: 'exam'
        },
        {
            date: 'June 10, 2023',
            title: 'Results Announced',
            content: 'Results for Spring 2023 semester have been announced. Check your results on the PU portal.',
            link: 'results',
            category: 'result'
        },
        {
            date: 'June 5, 2023',
            title: 'Registration Deadline',
            content: 'Last date for exam registration is June 30, 2023. Complete your registration before the deadline.',
            link: 'registration',
            category: 'notice'
        }
    ]
};