/**
 * 茶文化知识学习平台 - 主应用逻辑
 * Tea Culture Knowledge Learning Platform - Application Logic
 */

// ==================== 全局状态 ====================
let currentPage = 'home';
let currentCategoryFilter = 'all';
let currentCourseId = null;
let currentKnowledgeId = null;
let currentFavTab = 'course';
let carouselTimer = null;
let carouselIndex = 0;

// ==================== 初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
  initCarousel();
  initCategoryGrid();
  initHomeCourses();
  initHomeKnowledge();
  initCourseList();
  initKnowledgeList();
  initCategoryPage();
  updateProfileStats();
  autoSlideCarousel();
});

// ==================== 页面导航 ====================
function navigateTo(page) {
  // 隐藏所有页面
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.detail-page').forEach(p => p.classList.remove('active'));

  // 显示目标页面
  const targetPage = document.getElementById(`page-${page}`);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // 更新底部导航
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.page === page);
  });

  currentPage = page;

  // 刷新列表
  if (page === 'courses') renderCourseList();
  if (page === 'knowledge') renderKnowledgeList();
  if (page === 'mine') updateProfileStats();

  // 滚动到顶部
  window.scrollTo(0, 0);
}

// ==================== Toast ====================
let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 1500);
}

// ==================== 轮播图 ====================
function initCarousel() {
  const track = document.getElementById('carouselTrack');
  const dots = document.getElementById('carouselDots');

  track.innerHTML = banners.map((b, i) => `
    <div class="carousel-slide">
      <img class="slide-bg" src="${b.image}" alt="${b.title}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22400%22><rect fill=%22%23${b.color.replace('#','')}%22 width=%22800%22 height=%22400%22/><text fill=%22white%22 x=%22400%22 y=%22200%22 text-anchor=%22middle%22 font-size=%2236%22>🍵</text></svg>'">
      <div class="slide-overlay">
        <div class="slide-title">${b.title}</div>
        <div class="slide-subtitle">${b.subtitle}</div>
      </div>
    </div>
  `).join('');

  dots.innerHTML = banners.map((_, i) => `
    <span class="carousel-dot ${i === 0 ? 'active' : ''}"></span>
  `).join('');

  // 触摸滑动
  let startX = 0;
  const carousel = document.getElementById('carousel');
  carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    stopCarousel();
  });
  carousel.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) carouselIndex = Math.min(carouselIndex + 1, banners.length - 1);
      else carouselIndex = Math.max(carouselIndex - 1, 0);
    }
    updateCarousel();
    autoSlideCarousel();
  });
}

function updateCarousel() {
  const track = document.getElementById('carouselTrack');
  track.style.transform = `translateX(-${carouselIndex * 100}%)`;
  document.querySelectorAll('.carousel-dot').forEach((d, i) => {
    d.classList.toggle('active', i === carouselIndex);
  });
}

function autoSlideCarousel() {
  stopCarousel();
  carouselTimer = setInterval(() => {
    carouselIndex = (carouselIndex + 1) % banners.length;
    updateCarousel();
  }, 4000);
}

function stopCarousel() {
  clearInterval(carouselTimer);
}

// ==================== 首页分类入口 ====================
function initCategoryGrid() {
  const grid = document.getElementById('categoryGrid');
  const displayCats = categories.slice(0, 8);
  grid.innerHTML = displayCats.map(cat => `
    <div class="category-item" onclick="navigateToCategory('${cat.id}')">
      <span class="cat-icon">${cat.icon}</span>
      <span class="cat-name">${cat.name}</span>
    </div>
  `).join('');
}

function navigateToCategory(catId) {
  navigateTo('category');
  currentCategoryFilter = catId;
  updateCategoryFilterUI();
  renderCategoryContent();
}

// ==================== 首页推荐课程 ====================
function initHomeCourses() {
  const container = document.getElementById('homeCourses');
  const onlineCourses = courses.filter(c => c.status === 'online').slice(0, 3);
  container.innerHTML = onlineCourses.map(c => renderCourseCard(c)).join('');
}

// ==================== 首页精选知识 ====================
function initHomeKnowledge() {
  const container = document.getElementById('homeKnowledge');
  const onlineKnowledge = knowledgeArticles.filter(k => k.status === 'online').slice(0, 3);
  container.innerHTML = onlineKnowledge.map(k => renderKnowledgeCard(k)).join('');
}

// ==================== 课程卡片 ====================
function renderCourseCard(c) {
  const levelClass = c.level === '初级' ? 'level-beginner' : c.level === '中级' ? 'level-intermediate' : 'level-advanced';
  return `
    <div class="card card-course" onclick="openCourseDetail('${c.id}')">
      <div class="card-img-wrapper">
        <img class="card-img" src="${c.cover}" alt="${c.title}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22600%22 height=%22400%22><rect fill=%22%232d5a27%22 width=%22600%22 height=%22400%22/><text fill=%22white%22 x=%22300%22 y=%22200%22 text-anchor=%22middle%22 font-size=%2240%22>🍵</text></svg>'">
        <div class="play-icon">▶</div>
        <span class="course-level ${levelClass}">${c.level}</span>
      </div>
      <div class="card-body">
        <div class="card-title">${c.title}</div>
        <div class="card-meta">
          <span>👨‍🏫 ${c.instructor}</span>
          <span>⏱️ ${c.duration}</span>
          <span>⭐ ${c.rating}</span>
        </div>
        <div class="card-meta" style="margin-top:4px">
          <span>👁️ ${formatCount(c.students)}人学习</span>
          <span>❤️ ${formatCount(c.favorites)}人收藏</span>
        </div>
      </div>
    </div>
  `;
}

// ==================== 知识卡片 ====================
function renderKnowledgeCard(k) {
  return `
    <div class="card" onclick="openKnowledgeDetail('${k.id}')">
      <img class="card-img" src="${k.cover}" alt="${k.title}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22600%22 height=%22400%22><rect fill=%22%238b4513%22 width=%22600%22 height=%22400%22/><text fill=%22white%22 x=%22300%22 y=%22200%22 text-anchor=%22middle%22 font-size=%2240%22>📜</text></svg>'">
      <div class="card-body">
        <div class="card-title">${k.title}</div>
        <div class="card-meta">
          <span>✍️ ${k.author}</span>
          <span>👁️ ${formatCount(k.readCount)}阅读</span>
          <span>❤️ ${formatCount(k.favorites)}收藏</span>
        </div>
        <div class="card-tags">
          ${k.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
}

// ==================== 课程列表页 ====================
function initCourseList() {
  renderCourseList();
}

function renderCourseList(searchText = '') {
  const container = document.getElementById('courseList');
  const empty = document.getElementById('courseEmpty');
  let filtered = courses.filter(c => c.status === 'online');

  if (searchText) {
    const kw = searchText.toLowerCase();
    filtered = filtered.filter(c =>
      c.title.toLowerCase().includes(kw) ||
      c.instructor.toLowerCase().includes(kw) ||
      c.categoryName.toLowerCase().includes(kw)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = '';
    empty.classList.remove('hidden');
  } else {
    empty.classList.add('hidden');
    container.innerHTML = filtered.map(c => renderCourseCard(c)).join('');
  }
}

function filterCourses() {
  const searchText = document.getElementById('courseSearch').value;
  const clearBtn = document.getElementById('courseSearchClear');
  clearBtn.classList.toggle('visible', searchText.length > 0);
  renderCourseList(searchText);
}

function clearCourseSearch() {
  document.getElementById('courseSearch').value = '';
  document.getElementById('courseSearchClear').classList.remove('visible');
  renderCourseList();
}

// ==================== 知识列表页 ====================
function initKnowledgeList() {
  renderKnowledgeList();
}

function renderKnowledgeList(searchText = '') {
  const container = document.getElementById('knowledgeList');
  const empty = document.getElementById('knowledgeEmpty');
  let filtered = knowledgeArticles.filter(k => k.status === 'online');

  if (searchText) {
    const kw = searchText.toLowerCase();
    filtered = filtered.filter(k =>
      k.title.toLowerCase().includes(kw) ||
      k.author.toLowerCase().includes(kw) ||
      k.tags.some(t => t.toLowerCase().includes(kw)) ||
      k.categoryName.toLowerCase().includes(kw)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = '';
    empty.classList.remove('hidden');
  } else {
    empty.classList.add('hidden');
    container.innerHTML = filtered.map(k => renderKnowledgeCard(k)).join('');
  }
}

function filterKnowledge() {
  const searchText = document.getElementById('knowledgeSearch').value;
  const clearBtn = document.getElementById('knowledgeSearchClear');
  clearBtn.classList.toggle('visible', searchText.length > 0);
  renderKnowledgeList(searchText);
}

function clearKnowledgeSearch() {
  document.getElementById('knowledgeSearch').value = '';
  document.getElementById('knowledgeSearchClear').classList.remove('visible');
  renderKnowledgeList();
}

// ==================== 分类页 ====================
function initCategoryPage() {
  const filterContainer = document.getElementById('categoryFilter');
  filterContainer.innerHTML = `
    <button class="filter-chip ${currentCategoryFilter === 'all' ? 'active' : ''}" data-cat="all" onclick="setCategoryFilter('all')">全部</button>
    ${categories.map(cat => `
      <button class="filter-chip ${currentCategoryFilter === cat.id ? 'active' : ''}" data-cat="${cat.id}" onclick="setCategoryFilter('${cat.id}')">${cat.icon} ${cat.name}</button>
    `).join('')}
  `;
  renderCategoryContent();
}

function setCategoryFilter(catId) {
  currentCategoryFilter = catId;
  updateCategoryFilterUI();
  renderCategoryContent();
}

function updateCategoryFilterUI() {
  document.querySelectorAll('.filter-chip').forEach(chip => {
    const catId = chip.dataset.cat || 'all';
    chip.classList.toggle('active', catId === currentCategoryFilter);
  });
}

function renderCategoryContent() {
  const container = document.getElementById('categoryContent');
  const empty = document.getElementById('categoryEmpty');

  let items = [];
  if (currentCategoryFilter === 'all') {
    // 显示所有上架内容：课程 + 知识
    const onlineCourses = courses.filter(c => c.status === 'online');
    const onlineKnowledge = knowledgeArticles.filter(k => k.status === 'online');
    items = [
      ...onlineCourses.map(c => ({ ...c, itemType: 'course' })),
      ...onlineKnowledge.map(k => ({ ...k, itemType: 'knowledge' }))
    ];
  } else {
    const cat = categories.find(c => c.id === currentCategoryFilter);
    if (cat) {
      if (cat.type === 'course') {
        items = courses.filter(c => c.category === cat.id && c.status === 'online')
          .map(c => ({ ...c, itemType: 'course' }));
      } else {
        items = knowledgeArticles.filter(k => k.category === cat.id && k.status === 'online')
          .map(k => ({ ...k, itemType: 'knowledge' }));
      }
    }
  }

  if (items.length === 0) {
    container.innerHTML = '';
    empty.classList.remove('hidden');
  } else {
    empty.classList.add('hidden');
    container.innerHTML = items.map(item => {
      if (item.itemType === 'course') return renderCourseCard(item);
      else return renderKnowledgeCard(item);
    }).join('');
  }
}

// ==================== 课程详情 ====================
function openCourseDetail(courseId) {
  const course = courses.find(c => c.id === courseId);
  if (!course) return;

  history.pushState({ type: 'course-detail' }, '');
  currentCourseId = courseId;
  const page = document.getElementById('page-course-detail');
  page.classList.add('active');
  document.getElementById('courseDetailTitle').textContent = course.title;
  updateCourseFavorBtn();

  const levelClass = course.level === '初级' ? 'level-beginner' : course.level === '中级' ? 'level-intermediate' : 'level-advanced';

  document.getElementById('courseDetailContent').innerHTML = `
    <img class="detail-cover" src="${course.cover}" alt="${course.title}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22600%22 height=%22400%22><rect fill=%22%232d5a27%22 width=%22600%22 height=%22400%22/><text fill=%22white%22 x=%22300%22 y=%22200%22 text-anchor=%22middle%22 font-size=%2240%22>🍵</text></svg>'">
    <div class="detail-content">
      <div class="detail-info">
        <h1>${course.title}</h1>
        <div class="detail-meta-row">
          <span class="detail-meta-item">👨‍🏫 ${course.instructor}</span>
          <span class="detail-meta-item">⏱️ ${course.duration}</span>
          <span class="detail-meta-item">⭐ ${course.rating}</span>
          <span class="detail-meta-item">👁️ ${formatCount(course.students)}人学习</span>
        </div>
        <span class="course-level ${levelClass}" style="display:inline-block;margin:8px 0;">${course.level}</span>
        <p class="detail-desc">${course.description}</p>
      </div>

      <div class="chapters-section">
        <h3>📖 课程目录 (${course.chapters.length}章)</h3>
        ${course.chapters.map((ch, i) => `
          <div class="chapter-item" onclick="playChapter('${course.id}', ${i})">
            <span class="ch-num">${i + 1}</span>
            <div class="ch-info">
              <div class="ch-title">${ch.title}</div>
              <div class="ch-duration">⏱️ ${ch.duration}</div>
            </div>
            <span class="ch-play">▶</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  document.body.style.overflow = 'hidden';
}

function closeCourseDetail() {
  document.getElementById('page-course-detail').classList.remove('active');
  document.getElementById('courseDetailContent').innerHTML = '';
  currentCourseId = null;
  document.body.style.overflow = '';
  // 刷新课程列表中的收藏状态
  if (currentPage === 'courses') renderCourseList();
}

function playChapter(courseId, chapterIndex) {
  const course = courses.find(c => c.id === courseId);
  if (!course) return;

  // 更新章节高亮
  document.querySelectorAll('.chapter-item').forEach((item, i) => {
    item.classList.toggle('playing', i === chapterIndex);
  });

  // 查找或创建视频播放器
  let videoContainer = document.querySelector('.video-container');
  if (!videoContainer) {
    const chaptersSection = document.querySelector('.chapters-section');
    videoContainer = document.createElement('div');
    videoContainer.className = 'video-container';
    chaptersSection.parentNode.insertBefore(videoContainer, chaptersSection);
  }

  videoContainer.innerHTML = `
    <video controls autoplay playsinline>
      <source src="${course.chapters[chapterIndex].video}" type="video/mp4">
      您的浏览器不支持视频播放
    </video>
  `;
  videoContainer.scrollIntoView({ behavior: 'smooth' });
}

function toggleCourseFavorite() {
  if (!currentCourseId) return;
  const idx = favoriteCourses.indexOf(currentCourseId);
  if (idx >= 0) {
    favoriteCourses.splice(idx, 1);
    showToast('已取消收藏');
  } else {
    favoriteCourses.push(currentCourseId);
    showToast('已加入收藏 ❤️');
  }
  updateCourseFavorBtn();
  updateProfileStats();
}

function updateCourseFavorBtn() {
  const btn = document.getElementById('courseFavorBtn');
  if (!currentCourseId) return;
  const isFav = favoriteCourses.includes(currentCourseId);
  btn.textContent = isFav ? '❤️' : '☆';
  btn.classList.toggle('favored', isFav);
}

// ==================== 知识详情 ====================
function openKnowledgeDetail(knowledgeId) {
  const article = knowledgeArticles.find(k => k.id === knowledgeId);
  if (!article) return;

  history.pushState({ type: 'knowledge-detail' }, '');
  currentKnowledgeId = knowledgeId;
  const page = document.getElementById('page-knowledge-detail');
  page.classList.add('active');
  document.getElementById('knowledgeDetailTitle').textContent = article.title;
  updateKnowledgeFavorBtn();

  document.getElementById('knowledgeDetailContent').innerHTML = `
    <img class="detail-cover" src="${article.cover}" alt="${article.title}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22600%22 height=%22400%22><rect fill=%22%238b4513%22 width=%22600%22 height=%22400%22/><text fill=%22white%22 x=%22300%22 y=%22200%22 text-anchor=%22middle%22 font-size=%2240%22>📜</text></svg>'">
    <div class="detail-content">
      <div class="detail-info">
        <h1>${article.title}</h1>
        <div class="detail-meta-row">
          <span class="detail-meta-item">✍️ ${article.author}</span>
          <span class="detail-meta-item">📅 ${article.publishDate}</span>
          <span class="detail-meta-item">👁️ ${formatCount(article.readCount)}阅读</span>
          <span class="detail-meta-item">❤️ ${formatCount(article.favorites)}收藏</span>
        </div>
        <div class="detail-tags">
          ${article.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <p class="detail-desc" style="margin-top:12px;text-indent:2em;">${article.summary}</p>
      </div>

      <div class="article-body">
        ${article.content}
      </div>
    </div>
  `;

  document.body.style.overflow = 'hidden';
}

function closeKnowledgeDetail() {
  document.getElementById('page-knowledge-detail').classList.remove('active');
  document.getElementById('knowledgeDetailContent').innerHTML = '';
  currentKnowledgeId = null;
  document.body.style.overflow = '';
  if (currentPage === 'knowledge') renderKnowledgeList();
}

function toggleKnowledgeFavorite() {
  if (!currentKnowledgeId) return;
  const idx = favoriteKnowledge.indexOf(currentKnowledgeId);
  if (idx >= 0) {
    favoriteKnowledge.splice(idx, 1);
    showToast('已取消收藏');
  } else {
    favoriteKnowledge.push(currentKnowledgeId);
    showToast('已加入收藏 ❤️');
  }
  updateKnowledgeFavorBtn();
  updateProfileStats();
}

function updateKnowledgeFavorBtn() {
  const btn = document.getElementById('knowledgeFavorBtn');
  if (!currentKnowledgeId) return;
  const isFav = favoriteKnowledge.includes(currentKnowledgeId);
  btn.textContent = isFav ? '❤️' : '☆';
  btn.classList.toggle('favored', isFav);
}

// ==================== 收藏管理 ====================
function showFavorites() {
  history.pushState({ type: 'favorites' }, '');
  const page = document.getElementById('page-favorites');
  page.classList.add('active');
  document.body.style.overflow = 'hidden';
  currentFavTab = 'course';
  document.querySelectorAll('.fav-tab').forEach((tab, i) => {
    tab.classList.toggle('active', i === 0);
  });
  renderFavorites();
}

function closeFavorites() {
  document.getElementById('page-favorites').classList.remove('active');
  document.body.style.overflow = '';
  updateProfileStats();
}

function switchFavTab(type, btn) {
  currentFavTab = type;
  document.querySelectorAll('.fav-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderFavorites();
}

function renderFavorites() {
  const container = document.getElementById('favList');
  const empty = document.getElementById('favEmpty');

  if (currentFavTab === 'course') {
    const favItems = courses.filter(c => favoriteCourses.includes(c.id));
    if (favItems.length === 0) {
      container.innerHTML = '';
      empty.classList.remove('hidden');
    } else {
      empty.classList.add('hidden');
      container.innerHTML = favItems.map(c => renderCourseCard(c)).join('');
    }
  } else {
    const favItems = knowledgeArticles.filter(k => favoriteKnowledge.includes(k.id));
    if (favItems.length === 0) {
      container.innerHTML = '';
      empty.classList.remove('hidden');
    } else {
      empty.classList.add('hidden');
      container.innerHTML = favItems.map(k => renderKnowledgeCard(k)).join('');
    }
  }
}

// ==================== 个人中心 ====================
function updateProfileStats() {
  document.getElementById('profileNickname').textContent = defaultUser.nickname;
  document.getElementById('statDays').textContent = defaultUser.studyDays;
  document.getElementById('statFavs').textContent = favoriteCourses.length + favoriteKnowledge.length;
}

// ==================== 工具函数 ====================
function formatCount(num) {
  if (num >= 10000) return (num / 10000).toFixed(1) + '万';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
  return num.toString();
}

// ==================== 键盘返回键处理 ====================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (document.getElementById('page-course-detail').classList.contains('active')) {
      closeCourseDetail();
    } else if (document.getElementById('page-knowledge-detail').classList.contains('active')) {
      closeKnowledgeDetail();
    } else if (document.getElementById('page-favorites').classList.contains('active')) {
      closeFavorites();
    }
  }
});

// ==================== 浏览器后退按钮处理 ====================
window.addEventListener('popstate', (e) => {
  if (e.state?.type === 'course-detail') closeCourseDetail();
  else if (e.state?.type === 'knowledge-detail') closeKnowledgeDetail();
  else if (e.state?.type === 'favorites') closeFavorites();
});

