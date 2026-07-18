/**
 * Level 2 - Task 1: Front-end Frameworks (Bootstrap)
 * Custom JavaScript with Email Functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Level 2 - Task 1 loaded successfully!');
    console.log('📌 Framework: Bootstrap 5.3.0');
    console.log('📌 Features: Responsive Cards & Grid Layout');
    console.log('📧 Contact: venkysadhu.8@gmail.com');
    
    // ============================================
    // NAVIGATION SCROLL SPY
    // ============================================
    
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });
    
    // ============================================
    // CARD HOVER EFFECTS
    // ============================================
    
    const cards = document.querySelectorAll('.glass-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this