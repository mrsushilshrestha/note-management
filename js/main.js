/**
 * Main JavaScript file for BIT Notes Portal
 * Handles link initialization, dynamic content loading, and UI interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize drive links
    initializeDriveLinks();
    
    // Initialize PU links
    initializePULinks();
    
    // Initialize sidebar navigation
    initializeSidebar();
    
    // Load news content if on news page
    if (window.location.href.includes('news.html')) {
        loadNewsContent();
        setupNewsFilters();
    }
    
    // Initialize gallery images if on home page
    if (window.location.href.includes('index.html') || window.location.href.endsWith('/')) {
        initializeGalleryImages();
        initializeAdBanners();
    }
    
    // Add smooth scrolling for anchor links
    addSmoothScrolling();
    
    // Add lazy loading for images
    addLazyLoading();
});

/**
 * Initialize Google Drive links
 */
function initializeDriveLinks() {
    const driveLinks = document.querySelectorAll('.drive-link');
    
    driveLinks.forEach(link => {
        const semester = link.getAttribute('data-semester');
        const type = link.getAttribute('data-type');
        
        if (CONFIG.driveLinks[semester]) {
            let linkType = type;
            
            // Convert type to match CONFIG structure
            if (type === 'past-questions') {
                linkType = 'pastQuestions';
            }
            
            if (CONFIG.driveLinks[semester][linkType]) {
                link.href = CONFIG.driveLinks[semester][linkType];
                link.target = "_blank";
            }
        }
    });
}

/**
 * Initialize Pokhara University links
 */
function initializePULinks() {
    const puLinks = document.querySelectorAll('.pu-link');
    
    puLinks.forEach(link => {
        const notice = link.getAttribute('data-notice');
        
        if (CONFIG.puLinks[notice]) {
            link.href = CONFIG.puLinks[notice];
            link.target = "_blank";
        }
    });
}

/**
 * Initialize gallery images
 */
function initializeGalleryImages() {
    const galleryImages = document.querySelectorAll('.gallery-img');
    
    galleryImages.forEach((img, index) => {
        if (CONFIG.galleryImages[index]) {
            img.src = CONFIG.galleryImages[index];
        }
    });
}

/**
 * Initialize advertisement banners
 */
function initializeAdBanners() {
    const adBanners = document.querySelectorAll('.ad-img');
    
    adBanners.forEach((banner, index) => {
        if (CONFIG.adBanners[index]) {
            banner.src = CONFIG.adBanners[index];
        }
    });
}

/**
 * Load news content dynamically
 */
function loadNewsContent() {
    const newsContainer = document.getElementById('news-container');
    
    if (!newsContainer) return;
    
    // Sample news data - in a real application, this would come from a database or API
    const newsItems = [
        {
            date: 'June 15, 2023',
            title: 'Exam Schedule for Fall 2023',
            content: 'The examination schedule for Fall 2023 has been announced. Check the official PU website for details.',
            link: 'exam-schedule',
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
        },
        {
            date: 'May 25, 2023',
            title: 'Tech Fest 2023',
            content: 'Annual Tech Fest will be held on July 15-16, 2023. Register now to participate in various competitions and workshops.',
            link: 'notices',
            category: 'event'
        },
        {
            date: 'May 20, 2023',
            title: 'New Course Introduction',
            content: 'New elective courses for 7th semester students have been introduced. Check the details on the PU website.',
            link: 'notices',
            category: 'notice'
        },
        {
            date: 'May 15, 2023',
            title: 'Scholarship Applications',
            content: 'Applications for merit-based scholarships are now open. Last date to apply is June 15, 2023.',
            link: 'notices',
            category: 'notice'
        },
        {
            date: 'May 10, 2023',
            title: 'Workshop on AI',
            content: 'A two-day workshop on Artificial Intelligence and Machine Learning will be conducted on May 25-26, 2023.',
            link: 'notices',
            category: 'event'
        },
        {
            date: 'May 5, 2023',
            title: 'Mid-term Exam Results',
            content: 'Mid-term examination results for Spring 2023 have been published. Check your results on the student portal.',
            link: 'results',
            category: 'result'
        }
    ];
    
    // Generate HTML for each news item
    newsItems.forEach(item => {
        const newsCard = document.createElement('div');
        newsCard.className = 'col-md-6 col-lg-4 news-item ' + item.category;
        
        newsCard.innerHTML = `
            <div class="news-card">
                <div class="news-date">${item.date}</div>
                <div class="news-category">${getCategoryLabel(item.category)}</div>
                <h3>${item.title}</h3>
                <p>${item.content}</p>
                <a href="#" class="news-link pu-link" data-notice="${item.link}">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
        
        newsContainer.appendChild(newsCard);
    });
    
    // Initialize PU links after adding news items
    initializePULinks();
}

/**
 * Set up news filters
 */
function setupNewsFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const newsItems = document.querySelectorAll('.news-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Show/hide news items based on filter
            newsItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

/**
 * Initialize sidebar navigation
 */
function initializeSidebar() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    if (!sidebarToggle || !sidebar || !overlay) return;
    
    // Toggle sidebar when button is clicked
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Change icon based on sidebar state
        const icon = sidebarToggle.querySelector('i');
        if (sidebar.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close sidebar when overlay is clicked
    overlay.addEventListener('click', function() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        
        // Reset icon
        const icon = sidebarToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
    
    // Set active link in sidebar based on current page
    const currentPage = window.location.href;
    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
    
    sidebarLinks.forEach(link => {
        if (currentPage.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Add smooth scrolling for anchor links
 */
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for header
                    behavior: 'smooth'
                });
                
                // Close sidebar if open
                const sidebar = document.getElementById('sidebar');
                const overlay = document.getElementById('overlay');
                if (sidebar && sidebar.classList.contains('active')) {
                    sidebar.classList.remove('active');
                    overlay.classList.remove('active');
                    
                    // Reset icon
                    const sidebarToggle = document.getElementById('sidebarToggle');
                    if (sidebarToggle) {
                        const icon = sidebarToggle.querySelector('i');
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            }
        });
    });
}

/**
 * Add lazy loading for images
 */
function addLazyLoading() {
    // Check if browser supports Intersection Observer
    if ('IntersectionObserver' in window) {
        const imgObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    
                    if (src) {
                        img.src = src;
                        img.removeAttribute('data-src');
                    }
                    
                    observer.unobserve(img);
                }
            });
        });
        
        // Target all images with data-src attribute
        document.querySelectorAll('img[data-src]').forEach(img => {
            imgObserver.observe(img);
        });
    } else {
        // Fallback for browsers that don't support Intersection Observer
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
        });
    }
}

/**
 * Get category label for display
 */
function getCategoryLabel(category) {
    const labels = {
        'exam': 'Exam',
        'result': 'Result',
        'event': 'Event',
        'notice': 'Notice'
    };
    
    return labels[category] || 'Notice';
}