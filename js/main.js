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
    
    // Initialize theme switcher
    initializeThemeSwitcher();
    
    // Initialize search functionality
    initializeSearch();
    
    // Initialize gallery image zoom on click
    initializeGalleryZoom();
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
 * Initialize advertisement banners with rotation and aspect ratio support
 */
function initializeAdBanners() {
    const adBanner = document.getElementById('ad-banner');
    
    if (!adBanner) return;
    
    // Clear any existing content
    adBanner.innerHTML = '';
    
    // Set appropriate aspect ratio class based on first image or configuration
    // You can modify this to detect each image's ratio or set manually
    if (CONFIG.adAspectRatio) {
        adBanner.className = `ad-banner ratio-${CONFIG.adAspectRatio}`;
    } else {
        adBanner.className = 'ad-banner ratio-16-9'; // Default to landscape
    }
    
    // Create image elements for each banner
    CONFIG.adBanners.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Advertisement ${index + 1}`;
        img.className = index === 0 ? 'ad-img active' : 'ad-img';
        
        // Add loading attribute for better performance
        img.loading = 'lazy';
        
        // Add error handling
        img.onerror = function() {
            console.error(`Failed to load advertisement image: ${src}`);
            this.style.display = 'none';
        };
        
        adBanner.appendChild(img);
    });
    
    // If there's only one image, no need for rotation
    if (CONFIG.adBanners.length <= 1) return;
    
    // Set up rotation timer
    let currentIndex = 0;
    
    // Function to rotate to the next image
    function rotateAds() {
        const images = adBanner.querySelectorAll('.ad-img');
        
        // Skip hidden images (those that failed to load)
        let nextIndex = (currentIndex + 1) % images.length;
        let attempts = 0;
        
        while (images[nextIndex].style.display === 'none' && attempts < images.length) {
            nextIndex = (nextIndex + 1) % images.length;
            attempts++;
        }
        
        // If all images are hidden, do nothing
        if (attempts >= images.length) return;
        
        // Hide current image
        images[currentIndex].classList.remove('active');
        
        // Show new image
        currentIndex = nextIndex;
        images[currentIndex].classList.add('active');
    }
    
    // Start rotation timer (15 seconds = 15000 milliseconds for better engagement)
    setInterval(rotateAds, 15000);
}

/**
 * Load news content dynamically
 */
function loadNewsContent() {
    const newsContainer = document.getElementById('news-container');
    
    if (!newsContainer) return;
    
    // Use newsItems from CONFIG instead of hardcoding them here
    const newsItems = CONFIG.newsItems || [];
    
    // Generate HTML for each news item
    newsItems.forEach(item => {
        const newsCard = document.createElement('div');
        newsCard.className = 'col-md-6 col-lg-4 news-item ' + item.category;
        
        // Fix the link URL if it contains backticks
        let linkUrl = item.link;
        if (typeof linkUrl === 'string') {
            linkUrl = linkUrl.replace(/`/g, '').trim();
        }
        
        newsCard.innerHTML = `
            <div class="news-card">
                <div class="news-date">${item.date}</div>
                <div class="news-category">${getCategoryLabel(item.category)}</div>
                <h3>${item.title}</h3>
                <p>${item.content}</p>
                <a href="${linkUrl}" class="news-link" target="_blank">${item.link.includes('http') ? 'Visit Link' : 'Read More'} <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
        
        newsContainer.appendChild(newsCard);
    });
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
 * Initialize theme switcher
 */
function initializeThemeSwitcher() {
    // Create theme switcher button
    const header = document.querySelector('header .container');
    
    if (!header) return;
    
    const themeSwitcher = document.createElement('div');
    themeSwitcher.className = 'theme-switcher';
    themeSwitcher.innerHTML = `
        <button id="themeSwitchBtn">
            <i class="fas fa-moon"></i>
        </button>
    `;
    
    header.appendChild(themeSwitcher);
    
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.querySelector('#themeSwitchBtn i').classList.remove('fa-moon');
        document.querySelector('#themeSwitchBtn i').classList.add('fa-sun');
    }
    
    // Add event listener to theme switch button
    document.getElementById('themeSwitchBtn').addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        // Update icon
        const icon = this.querySelector('i');
        if (document.body.classList.contains('dark-theme')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
}

/**
 * Initialize search functionality
 */
function initializeSearch() {
    const header = document.querySelector('header .container');
    
    if (!header) return;
    
    // Create search button
    const searchButton = document.createElement('div');
    searchButton.className = 'search-button';
    searchButton.innerHTML = `
        <button id="searchBtn">
            <i class="fas fa-search"></i>
        </button>
    `;
    
    header.appendChild(searchButton);
    
    // Create search overlay
    const searchOverlay = document.createElement('div');
    searchOverlay.className = 'search-overlay';
    searchOverlay.id = 'searchOverlay';
    searchOverlay.innerHTML = `
        <div class="search-container">
            <button class="close-search" id="closeSearch">
                <i class="fas fa-times"></i>
            </button>
            <h2>Search</h2>
            <div class="search-form">
                <input type="text" id="searchInput" placeholder="Search for notes, questions, etc.">
                <button id="performSearch">
                    <i class="fas fa-search"></i>
                </button>
            </div>
            <div id="searchResults" class="search-results"></div>
        </div>
    `;
    
    document.body.appendChild(searchOverlay);
    
    // Add event listeners
    document.getElementById('searchBtn').addEventListener('click', function() {
        document.getElementById('searchOverlay').classList.add('active');
        document.getElementById('searchInput').focus();
    });
    
    document.getElementById('closeSearch').addEventListener('click', function() {
        document.getElementById('searchOverlay').classList.remove('active');
    });
    
    document.getElementById('searchInput').addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    document.getElementById('performSearch').addEventListener('click', performSearch);
    
    function performSearch() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const searchResults = document.getElementById('searchResults');
        
        if (searchTerm.length < 3) {
            searchResults.innerHTML = '<p>Please enter at least 3 characters to search.</p>';
            return;
        }
        
        // Sample search results - in a real application, this would search through actual content
        const results = [
            {
                title: 'Database Management Notes',
                link: 'pages/notes.html#database',
                type: 'Notes',
                semester: '3rd Semester'
            },
            {
                title: 'Programming Fundamentals',
                link: 'pages/notes.html#programming',
                type: 'Notes',
                semester: '1st Semester'
            },
            {
                title: 'Data Structures Past Questions',
                link: 'pages/past-questions.html#data-structures',
                type: 'Past Questions',
                semester: '2nd Semester'
            }
        ].filter(item => {
            return item.title.toLowerCase().includes(searchTerm) || 
                   item.type.toLowerCase().includes(searchTerm) || 
                   item.semester.toLowerCase().includes(searchTerm);
        });
        
        if (results.length === 0) {
            searchResults.innerHTML = '<p>No results found. Try different keywords.</p>';
        } else {
            searchResults.innerHTML = '';
            
            results.forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.className = 'result-item';
                resultItem.innerHTML = `
                    <h3><a href="${result.link}">${result.title}</a></h3>
                    <p>${result.type} - ${result.semester}</p>
                `;
                
                searchResults.appendChild(resultItem);
            });
        }
    }
}

/**
 * Enhanced lazy loading for images with fade-in effect
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
                        // Add loading class for animation
                        img.classList.add('loading');
                        
                        // Create a new image to preload
                        const newImg = new Image();
                        newImg.src = src;
                        newImg.onload = function() {
                            // Once loaded, update the visible image
                            img.src = src;
                            img.removeAttribute('data-src');
                            
                            // Remove loading class and add loaded class for animation
                            setTimeout(() => {
                                img.classList.remove('loading');
                                img.classList.add('loaded');
                            }, 100);
                        };
                    }
                    
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '0px 0px 200px 0px' // Load images when they're 200px from viewport
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
            img.classList.add('loaded');
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

/**
 * Initialize gallery image zoom on click
 */
function initializeGalleryZoom() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    console.log('Found gallery items:', galleryItems.length);
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function(event) {
            console.log('Gallery item clicked');
            const img = this.querySelector('.gallery-img');
            img.classList.toggle('zoomed');
            
            // Prevent event from bubbling up to document
            event.stopPropagation();
            
            // Reset other zoomed images
            document.querySelectorAll('.gallery-img.zoomed').forEach(zoomedImg => {
                if (zoomedImg !== img) {
                    zoomedImg.classList.remove('zoomed');
                }
            });
        });
    });
    
    // Close zoomed image when clicking elsewhere on the page
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.gallery-item')) {
            document.querySelectorAll('.gallery-img.zoomed').forEach(img => {
                img.classList.remove('zoomed');
            });
        }
    });
}
