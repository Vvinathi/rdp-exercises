const recent = document.querySelector('.content__recent');
const popular = document.querySelector('.content__popular');
const trending = document.querySelector('.content__trending');

const recentMenu = document.querySelector('.Recent');
const popularMenu = document.querySelector('.Popular');
const trendingMenu = document.querySelector('.Trending');

recentMenu.addEventListener('click', () => {
    recent.style.display = 'flex';
    popular.style.display = 'none';
    trending.style.display = 'none';
    recentMenu.classList.add('bg-white','text-blue-800', 'border','border-4','border-blue-400','rounded-lg', 'border-double');
    popularMenu.classList.remove('bg-white', 'text-blue-500', 'border', 'border-4', 'border-blue-400','rounded-lg','border-double');
    trendingMenu.classList.remove('bg-white', 'text-blue-500', 'border', 'border-4', 'border-blue-400','rounded-lg','border-double');
    
});

popularMenu.addEventListener('click', () => {
    recent.style.display = 'none';
    popular.style.display = 'flex';
    trending.style.display = 'none';
    popularMenu.classList.add('bg-white', 'text-blue-800', 'border', 'border-4','border-blue-400', 'rounded-lg','border-double');
    recentMenu.classList.remove('bg-white', 'text-blue-800', 'border', 'border-4', 'border-blue-400','rounded-lg','border-double');
    trendingMenu.classList.remove('bg-white', 'text-blue-800', 'border','border-4', 'border-blue-400', 'rounded-lg','border-double');
});

trendingMenu.addEventListener('click', () => {
    recent.style.display = 'none';
    popular.style.display = 'none';
    trending.style.display = 'flex';
    trendingMenu.classList.add('bg-white','text-blue-800', 'border', 'border-4', 'border-blue-400','rounded-lg', 'border-double');
    recentMenu.classList.remove('bg-white', 'text-blue-800', 'border','border-4', 'border-blue-400', 'rounded-lg','border-double');
    popularMenu.classList.remove('bg-white', 'text-blue-800', 'border', 'border-4', 'border-blue-400','rounded-lg','border-double');

});
