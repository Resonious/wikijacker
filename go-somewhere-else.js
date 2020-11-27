const url = window.location.href;
const query = new URLSearchParams(url.split('?')[1]);
const search = query.get('search')
window.location.replace('https://jisho.org/search/' + search)
