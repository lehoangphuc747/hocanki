// Main functionality
class SimpleAddonsManager {
    constructor(addonsData) {
        console.log('SimpleAddonsManager constructor called with:', addonsData);
        this.allAddons = addonsData;
        this.filteredAddons = [...this.allAddons];
        this.selectedIds = new Set();
        this.currentSort = 'likes-desc';
        this.currentView = 'table';
        this.searchTerm = '';
        this.likesFilter = '';

        console.log('SimpleAddonsManager properties set, calling init()...');
        this.init();
        console.log('SimpleAddonsManager init() completed');
    }

    init() {
        console.log('init() called, binding events...');
        this.bindEvents();
        console.log('Events bound, applying filters...');
        this.applyFilters(); // Renders the initial list
        console.log('Filters applied, updating stats...');
        this.updateStats();
        console.log('init() completed');
    }

    bindEvents() {
        document.getElementById('search-input').addEventListener('input',
            this.debounce(this.handleSearch.bind(this), 300));
        document.getElementById('clear-search').addEventListener('click', this.clearSearch.bind(this));

        document.getElementById('sort-select').addEventListener('change', this.handleSort.bind(this));
        document.getElementById('likes-filter').addEventListener('change', this.handleLikesFilter.bind(this));

        document.getElementById('toggle-view').addEventListener('click', this.toggleView.bind(this));

        document.getElementById('select-all').addEventListener('change', this.toggleSelectAll.bind(this));
        document.getElementById('clear-selection').addEventListener('click', this.clearSelection.bind(this));

        document.getElementById('export-btn').addEventListener('click', this.toggleExportMenu.bind(this));
        document.querySelectorAll('.export-option').forEach(btn => {
            btn.addEventListener('click', this.handleExport.bind(this));
        });
        document.getElementById('export-selected').addEventListener('click', this.exportSelected.bind(this));
        document.getElementById('open-all').addEventListener('click', this.openSelected.bind(this));
        document.getElementById('clear-filters').addEventListener('click', this.clearFilters.bind(this));

        document.addEventListener('keydown', this.handleKeyboard.bind(this));

        document.addEventListener('click', (event) => {
            const exportGroup = document.querySelector('.export-group');
            const exportMenu = document.getElementById('export-menu');
            if (!exportGroup.contains(event.target)) {
                exportMenu.classList.add('hidden');
            }
        });
        
        // Xóa hoặc comment lại toàn bộ khối này
        /*
        const backToTopBtn = document.getElementById('back-to-top');
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        */
    }

    debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    handleSearch(event) {
        this.searchTerm = event.target.value.toLowerCase().trim();
        this.applyFilters();
    }

    clearSearch() {
        document.getElementById('search-input').value = '';
        this.searchTerm = '';
        this.applyFilters();
    }

    handleSort(event) {
        this.currentSort = event.target.value;
        this.sortAndRender();
    }

    handleLikesFilter(event) {
        this.likesFilter = event.target.value;
        this.applyFilters();
    }

    applyFilters() {
        console.log('applyFilters() called, filtering addons...');
        this.showLoading();
        this.filteredAddons = this.allAddons.filter(addon => {
            if (this.searchTerm && !addon.title.toLowerCase().includes(this.searchTerm)) {
                return false;
            }
            if (this.likesFilter && addon.likes < parseInt(this.likesFilter)) {
                return false;
            }
            return true;
        });
        console.log('Filtering complete, sorting and rendering...');
        this.sortAndRender();
        console.log('applyFilters() completed');
    }

    sortAndRender() {
        this.sortAddons();
        this.render();
        this.hideLoading();
    }

    sortAddons() {
        const [field, direction] = this.currentSort.split('-');

        this.filteredAddons.sort((a, b) => {
            let valA = a[field];
            let valB = b[field];

            if (field === 'modified') {
                valA = new Date(valA);
                valB = new Date(valB);
            } else if (field === 'title') {
                valA = valA.toLowerCase();
                valB = valB.toLowerCase();
            }

            if (valA < valB) return direction === 'asc' ? -1 : 1;
            if (valA > valB) return direction === 'asc' ? 1 : -1;
            return 0;
        });
    }

    toggleView() {
        this.currentView = this.currentView === 'table' ? 'card' : 'table';
        
        const tableView = document.getElementById('table-view');
        const cardView = document.getElementById('card-view');
        const toggleBtn = document.getElementById('toggle-view');
        
        if (this.currentView === 'card') {
            tableView.classList.add('hidden');
            cardView.classList.remove('hidden');
            toggleBtn.innerHTML = '<span class="btn-icon">☰</span><span class="btn-text">Dạng bảng</span>';
        } else {
            tableView.classList.remove('hidden');
            cardView.classList.add('hidden');
            toggleBtn.innerHTML = '<span class="btn-icon">⚏</span><span class="btn-text">Dạng thẻ</span>';
        }
        
        this.render();
    }

    render() {
        console.log('render() called, filteredAddons length:', this.filteredAddons.length);
        this.showLoading();

        setTimeout(() => {
            if (this.filteredAddons.length === 0) {
                console.log('No addons to render, showing empty state');
                this.showEmpty();
            } else {
                console.log('Rendering addons, current view:', this.currentView);
                this.hideEmpty();
                if (this.currentView === 'table') {
                    this.renderTable();
                } else {
                    this.renderCards();
                }
            }
            this.hideLoading();
            this.updateStats();
        }, 200);
    }

    renderTable() {
        console.log('renderTable() called');
        const container = document.getElementById('addon-list');
        console.log('Container found:', container);
        
        if (!container) {
            console.error('Container #addon-list not found!');
            return;
        }
        
        container.innerHTML = '';
        console.log('Rendering', this.filteredAddons.length, 'addons');
        
        this.filteredAddons.forEach(addon => {
            const item = this.createTableItem(addon);
            container.appendChild(item);
        });
        
        console.log('Table rendering completed');
    }

    createTableItem(addon) {
        const isSelected = this.selectedIds.has(addon.id);
        const div = document.createElement('div');
        div.className = `addon-item ${isSelected ? 'selected' : ''}`;
        div.dataset.addonId = addon.id;

        const getPopularityClass = (likes) => {
            if (likes >= 10000) return 'hot';
            if (likes >= 5000) return 'popular';
            if (likes >= 1000) return 'good';
            return 'new';
        };

        const popularityClass = getPopularityClass(addon.likes);
        const popularityText = {
            'hot': '🔥 Hot',
            'popular': '⭐ Popular',
            'good': '👍 Good',
            'new': '✨ New'
        };
        
        div.innerHTML = `
            <div class="item-select">
                <input type="checkbox" class="item-checkbox" ${isSelected ? 'checked' : ''}>
            </div>
            <div class="item-content">
                <div class="item-main">
                    <h3 class="item-title">
                        <a href="${addon.link}" target="_blank" rel="noopener">
                            ${this.highlightSearch(addon.title)}
                        </a>
                    </h3>
                    <div class="item-meta">
                        <div class="meta-item">
                            <span class="meta-icon">❤️</span>
                            <span class="likes-count">${addon.likes.toLocaleString()}</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-icon">📅</span>
                            <span class="date-modified">${this.formatDate(addon.modified)}</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-icon">💻</span>
                            <span class="version-badge">${addon.version || 'N/A'}</span>
                        </div>
                    </div>
                </div>
                <div class="item-actions">
                    <button class="item-btn" title="Xem chi tiết" onclick="window.open('${addon.link}', '_blank')">
                        <span>🔗</span>
                    </button>
                </div>
            </div>
            <div class="popularity-indicator popularity-${popularityClass}">
                ${popularityText[popularityClass]}
            </div>
        `;
        
        div.addEventListener('click', this.handleItemClick.bind(this));
        return div;
    }

    renderCards() {
        const container = document.getElementById('card-grid');
        
        container.innerHTML = '';
        
        this.filteredAddons.forEach(addon => {
            const card = this.createCard(addon);
            container.appendChild(card);
        });
    }

    createCard(addon) {
        const isSelected = this.selectedIds.has(addon.id);
        const div = document.createElement('div');
        div.className = `addon-card ${isSelected ? 'selected' : ''}`;
        div.dataset.addonId = addon.id;
        
        const popularity = this.getPopularity(addon.likes);
        
        div.innerHTML = `
            <div class="card-header">
                <input type="checkbox" class="card-checkbox" ${isSelected ? 'checked' : ''}>
                <div class="popularity ${popularity.class}">${popularity.icon} ${popularity.class.toUpperCase()}</div>
            </div>
            <h3 class="card-title">
                <a href="${addon.link}" target="_blank" rel="noopener">
                    ${this.highlightSearch(addon.title)}
                </a>
            </h3>
            <div class="card-stats">
                <div class="stat">
                    <span class="stat-icon">❤️</span>
                    <span class="stat-value">${addon.likes.toLocaleString()}</span>
                    <span class="stat-label">Lượt thích</span>
                </div>
                <div class="stat">
                    <span class="stat-icon">📅</span>
                    <span class="stat-value">${this.formatDate(addon.modified)}</span>
                    <span class="stat-label">Cập nhật</span>
                </div>
                <div class="stat">
                    <span class="stat-icon">💻</span>
                    <span class="stat-value">${addon.version || 'N/A'}</span>
                    <span class="stat-label">Phiên bản</span>
                </div>
                <div class="stat">
                    <span class="stat-icon">📈</span>
                    <span class="stat-value">${addon.total.toLocaleString() || '0'}</span>
                    <span class="stat-label">Tải xuống</span>
                </div>
            </div>
            <div class="card-footer">
                <a href="${addon.link}" target="_blank" rel="noopener" class="card-btn primary">
                    🔗 Chi tiết
                </a>
                <button class="card-btn secondary copy-link-btn" data-link="${addon.link}">
                    📋 Copy link
                </button>
            </div>
        `;
        
        div.addEventListener('click', this.handleCardClick.bind(this));
        div.querySelector('.copy-link-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            const link = e.currentTarget.dataset.link;
            document.execCommand('copy', false, link);
            alert('Đã copy link: ' + link);
        });
        
        return div;
    }

    getPopularity(likes) {
        if (likes >= 10000) return { class: 'hot', icon: '🔥' };
        if (likes >= 5000) return { class: 'popular', icon: '⭐' };
        if (likes >= 1000) return { class: 'good', icon: '👍' };
        return { class: 'new', icon: '✨' };
    }

    highlightSearch(text) {
        if (!this.searchTerm) return text;
        const regex = new RegExp(`(${this.searchTerm})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) return 'Hôm nay';
        if (diffDays === 1) return 'Hôm qua';
        if (diffDays < 7) return `${diffDays} ngày trước`;
        if (diffDays < 30) return `${Math.floor(diffDays / 7)} tuần trước`;
        return `${Math.floor(diffDays / 30)} tháng trước`;
    }

    handleItemClick(event) {
        if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON') return;
        
        const item = event.currentTarget;
        const checkbox = item.querySelector('.item-checkbox');
        const addonId = parseInt(item.dataset.addonId);
        
        if (event.target === checkbox) {
            this.toggleSelection(addonId, checkbox.checked);
        } else {
            checkbox.checked = !checkbox.checked;
            this.toggleSelection(addonId, checkbox.checked);
        }
    }

    handleCardClick(event) {
        if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON') return;
        
        const card = event.currentTarget;
        const checkbox = card.querySelector('.card-checkbox');
        const addonId = parseInt(card.dataset.addonId);
        
        if (event.target === checkbox) {
            this.toggleSelection(addonId, checkbox.checked);
        } else {
            checkbox.checked = !checkbox.checked;
            this.toggleSelection(addonId, checkbox.checked);
        }
    }

    toggleSelection(addonId, isSelected) {
        if (isSelected) {
            this.selectedIds.add(addonId);
        } else {
            this.selectedIds.delete(addonId);
        }
        
        this.updateItemSelection(addonId, isSelected);
        this.updateStats();
        this.updateSelectionFooter();
    }

    updateItemSelection(addonId, isSelected) {
        const items = document.querySelectorAll(`[data-addon-id="${addonId}"]`);
        items.forEach(item => {
            item.classList.toggle('selected', isSelected);
            const checkbox = item.querySelector('.item-checkbox, .card-checkbox');
            if (checkbox) checkbox.checked = isSelected;
        });
    }

    toggleSelectAll(event) {
        const isChecked = event.target.checked;
        const visibleIds = this.filteredAddons.map(a => a.id);
        
        if (isChecked) {
            visibleIds.forEach(id => this.selectedIds.add(id));
        } else {
            visibleIds.forEach(id => this.selectedIds.delete(id));
        }
        
        this.updateAllCheckboxes();
        this.updateStats();
        this.updateSelectionFooter();
    }

    clearSelection() {
        this.selectedIds.clear();
        this.updateAllCheckboxes();
        this.updateStats();
        this.updateSelectionFooter();
    }

    updateAllCheckboxes() {
        document.querySelectorAll('.item-checkbox, .card-checkbox').forEach(checkbox => {
            const item = checkbox.closest('[data-addon-id]');
            if (item) {
                const addonId = parseInt(item.dataset.addonId);
                const isSelected = this.selectedIds.has(addonId);
                checkbox.checked = isSelected;
                item.classList.toggle('selected', isSelected);
            }
        });
        
        const selectAllCheckbox = document.getElementById('select-all');
        if (selectAllCheckbox) {
            const visibleAddonsCount = this.filteredAddons.length;
            selectAllCheckbox.checked = this.selectedIds.size === visibleAddonsCount && visibleAddonsCount > 0;
        }
    }
    
    updateStats() {
        document.getElementById('total-count').textContent = `${this.filteredAddons.length.toLocaleString()} add-ons`;
        
        const selectedElement = document.getElementById('selected-count');
        if (this.selectedIds.size > 0) {
            selectedElement.textContent = `${this.selectedIds.size} đã chọn`;
            selectedElement.style.display = 'inline';
        } else {
            selectedElement.style.display = 'none';
        }
    }

    updateSelectionFooter() {
        const footer = document.getElementById('selection-footer');
        const text = document.getElementById('selection-text');
        
        if (this.selectedIds.size > 0) {
            footer.classList.remove('hidden');
            text.textContent = `${this.selectedIds.size} add-ons đã chọn`;
        } else {
            footer.classList.add('hidden');
        }
    }

    showLoading() {
        document.getElementById('loading').classList.remove('hidden');
        document.getElementById('table-view').classList.add('hidden');
        document.getElementById('card-view').classList.add('hidden');
        document.getElementById('empty-state').classList.add('hidden');
    }

    hideLoading() {
        document.getElementById('loading').classList.add('hidden');
    }

    showEmpty() {
        document.getElementById('empty-state').classList.remove('hidden');
        document.getElementById('table-view').classList.add('hidden');
        document.getElementById('card-view').classList.add('hidden');
    }

    hideEmpty() {
        document.getElementById('empty-state').classList.add('hidden');
        const currentViewElement = document.getElementById(this.currentView + '-view');
        if (currentViewElement) {
            currentViewElement.classList.remove('hidden');
        }
    }

    clearFilters() {
        document.getElementById('search-input').value = '';
        document.getElementById('sort-select').value = 'likes-desc';
        document.getElementById('likes-filter').value = '';
        
        this.searchTerm = '';
        this.likesFilter = '';
        this.currentSort = 'likes-desc';
        
        this.applyFilters();
    }

    toggleExportMenu() {
        const menu = document.getElementById('export-menu');
        menu.classList.toggle('hidden');
    }

    handleExport(event) {
        const format = event.target.dataset.format;
        const dataToExport = this.selectedIds.size > 0
            ? this.allAddons.filter(addon => this.selectedIds.has(addon.id))
            : this.filteredAddons;
        
        if (dataToExport.length === 0) {
            // Using custom UI instead of alert
            this.showModal('Không có dữ liệu để xuất.');
            return;
        }

        switch (format) {
            case 'csv':
                this.exportCSV(dataToExport);
                break;
            case 'txt-full':
                this.exportTxtFull(dataToExport);
                break;
            case 'txt-links':
                this.exportTxtLinks(dataToExport);
                break;
        }

        document.getElementById('export-menu').classList.add('hidden');
    }

    exportCSV(data) {
        const csvContent = this.generateCSV(data);
        this.downloadFile('anki-addons.csv', csvContent, 'text/csv');
    }

    exportTxtFull(data) {
        let content = '';
        data.forEach((addon, index) => {
            content += `${index + 1}. ${addon.title}\n`;
            content += `    Lượt thích: ${addon.likes.toLocaleString()}\n`;
            content += `    Cập nhật: ${addon.modified}\n`;
            content += `    Phiên bản: ${addon.version || 'N/A'}\n`;
            content += `    Link: ${addon.link}\n\n`;
        });
        this.downloadFile('anki-addons-full.txt', content, 'text/plain');
    }

    exportTxtLinks(data) {
        const content = data.map(addon => addon.link).join('\n');
        this.downloadFile('anki-addons-links.txt', content, 'text/plain');
    }

    exportSelected() {
        if (this.selectedIds.size === 0) {
            this.showModal('Vui lòng chọn ít nhất một add-on.');
            return;
        }
        
        const selectedAddons = this.allAddons.filter(addon => this.selectedIds.has(addon.id));
        const csvContent = this.generateCSV(selectedAddons);
        this.downloadFile('selected-addons.csv', csvContent, 'text/csv');
    }

    generateCSV(data) {
        const headers = ['Tên', 'Lượt thích', 'Cập nhật', 'Phiên bản', 'Link'];
        const rows = [headers.join(',')];
        
        data.forEach(addon => {
            const row = [
                `"${addon.title.replace(/"/g, '""')}"`,
                addon.likes,
                addon.modified,
                addon.version || 'N/A',
                addon.link
            ];
            rows.push(row.join(','));
        });
        
        return rows.join('\n');
    }

    downloadFile(filename, content, mimeType) {
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    }
    
    showModal(message) {
        // A simple custom modal for alerts
        const modalHtml = `
            <div id="custom-modal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-[1000] flex justify-center items-center">
                <div class="bg-white p-8 rounded-xl shadow-lg border-2 border-black w-11/12 md:w-1/3 text-center">
                    <p class="mb-4 text-lg font-semibold">${message}</p>
                    <button id="modal-close-btn" class="btn btn-secondary bg-gray-200">Đóng</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        
        const closeModal = () => {
            document.getElementById('custom-modal').remove();
        };
        
        document.getElementById('modal-close-btn').addEventListener('click', closeModal);
        document.getElementById('custom-modal').addEventListener('click', (e) => {
            if (e.target.id === 'custom-modal') {
                closeModal();
            }
        });
    }
    
    openSelected() {
        if (this.selectedIds.size === 0) {
            this.showModal('Vui lòng chọn ít nhất một add-on.');
            return;
        }
        
        const selectedAddons = this.allAddons.filter(addon => this.selectedIds.has(addon.id));
        
        if (selectedAddons.length > 10) {
            // Using a custom confirm modal
            this.showConfirmModal(`Bạn sắp mở ${selectedAddons.length} tab. Tiếp tục?`, () => {
                selectedAddons.forEach(addon => {
                    window.open(addon.link, '_blank', 'noopener,noreferrer');
                });
            });
        } else {
            selectedAddons.forEach(addon => {
                window.open(addon.link, '_blank', 'noopener,noreferrer');
            });
        }
    }
    
    showConfirmModal(message, onConfirm) {
        const modalHtml = `
            <div id="custom-confirm-modal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-[1000] flex justify-center items-center">
                <div class="bg-white p-8 rounded-xl shadow-lg border-2 border-black w-11/12 md:w-1/3 text-center">
                    <p class="mb-4 text-lg font-semibold">${message}</p>
                    <div class="flex justify-center gap-4">
                        <button id="confirm-yes-btn" class="btn btn-primary">Tiếp tục</button>
                        <button id="confirm-no-btn" class="btn btn-secondary">Hủy</button>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        
        const closeModal = () => {
            document.getElementById('custom-confirm-modal').remove();
        };
        
        document.getElementById('confirm-yes-btn').addEventListener('click', () => {
            onConfirm();
            closeModal();
        });
        
        document.getElementById('confirm-no-btn').addEventListener('click', closeModal);
        document.getElementById('custom-confirm-modal').addEventListener('click', (e) => {
            if (e.target.id === 'custom-confirm-modal') {
                closeModal();
            }
        });
    }

    handleKeyboard(event) {
        if (event.ctrlKey && event.key === 'a' && !event.target.matches('input')) {
            event.preventDefault();
            const selectAllCheckbox = document.getElementById('select-all');
            if (selectAllCheckbox) {
                selectAllCheckbox.checked = true;
                this.toggleSelectAll({ target: { checked: true } });
            }
        }
        
        if (event.key === 'Escape') {
            this.clearSelection();
        }
    }
}

// Export for use in other files
export { SimpleAddonsManager };
