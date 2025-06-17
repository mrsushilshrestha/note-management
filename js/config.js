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
            notes: "https://drive.google.com/drive/folders/1RgtYW6q0jbbAu67W0MiFXmcVmtCYk-5N?usp=drive_link",
            pastQuestions: "https://drive.google.com/drive/folders/1OqS9wdt1yla3yIudTPJvIGouBIs6cdur?usp=drive_link",
            syllabus: "https://drive.google.com/drive/folders/19pIj2RxHiAwDze8r4LmH-MkeSwPUyYQ-?usp=drive_link"
        },
        // 8th Semester
        8: {
            notes: "https://drive.google.com/drive/folders/8xxxxxxxxxxxxxxxx",
            pastQuestions: "https://drive.google.com/drive/folders/8xxxxxxxxxxxxxxxx",
            syllabus: "https://drive.google.com/drive/folders/8xxxxxxxxxxxxxxxx"
        }
    },
    
    // Purbanchal University notice links
    puLinks: {
        examSchedule: "https://pu.edu.np/exam-schedule",
        results: "https://pu.edu.np/results",
        registration: "https://pu.edu.np/registration",
        notices: "https://pu.edu.np/notices"
    },
    
    // Gallery images from Google Drive
    galleryImages: [
        "assets/images/HWC_0783.JPG",
        "assets/image/HWC_0783.JPG",
        "assets/image/HWC_2652.JPG",
        "assets/image/HWC_2661.JPG",
        "assets/image/HWC_2662.JPG",
        "assets/image/HWC_2663.JPG",
         

    ],
    
    // Advertisement banners
    // Advertisement banners
    adBanners: [
        "assets/images/advertisement-1.jpg",
        "assets/images/advertisement-4.jpg",
    ],
    // Set the aspect ratio for advertisements (16-9, 9-16, 1-1, 4-3)
    adAspectRatio: "16-9", // Default to landscape format
    
    // News items - for easy management
    newsItems: [
        {
            date: 'June 16, 2025',
            title: 'BIT Exam Schedule',
            content: 'The examination schedule for BIT has been announced. Check the official PU website for details.',
            link: 'https://puexam.edu.np/exam-schedule-new#',
            category: 'exam'
        },
        {
            date: 'August 20, 2023',
            title: 'New Workshop Announcement',
            content: 'A workshop on Web Development will be held next month. Register now to secure your spot.',
            link: 'https://example.com/workshop',
            category: 'event'
        },
        {
            date: 'June 10, 2023',
            title: 'Results Announced',
            content: 'Results for Spring 2023 semester have been announced. Check your results on the PU portal.',
            link: 'https://puexam.edu.np/find-results_new',
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