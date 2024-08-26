document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.content');

    // Hiển thị section đầu tiên mặc định
    sections[0].classList.add('active');
    menuItems[0].classList.add('active');

    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            // Ẩn tất cả các section
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Bỏ lớp active từ tất cả các mục menu
            menuItems.forEach(menuItem => {
                menuItem.classList.remove('active');
            });
            // Hiển thị section được chọn
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');

            // Thêm lớp active cho mục menu được chọn
            this.classList.add('active');
        });
    });
});