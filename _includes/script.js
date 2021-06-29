cost tabs = document.querySelectorAll('[data-tab-target]')
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    target.classlist.add('active')
  })
})
