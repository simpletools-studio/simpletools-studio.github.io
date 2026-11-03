(() => {
  'use strict';
  const config = window.SIMPLETOOLS_CONFIG || {};
  const dialog = document.getElementById('detail-dialog');
  const content = document.getElementById('detail-content');
  const index = document.querySelector('.detail-index');
  const next = document.querySelector('.next-button');
  const projects = ['simpletransform','simpleblend','supabase'];
  const titles = {simpletransform:'SimpleTransform',simpleblend:'SimpleBlend',supabase:'Supabase for Unity',about:'About',support:'Support'};
  let active = '', opener = null;
  document.getElementById('year').textContent = new Date().getFullYear();
  function configure() {
    const store = content.querySelector('[data-asset-store-product]');
    try { const url=new URL(config.assetStoreProductUrl); if(store && ['https:','http:'].includes(url.protocol)){store.href=url.href;store.hidden=false;} } catch {}
    const contact = content.querySelector('[data-contact-link]');
    if(contact && config.supportEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.supportEmail)) {
      contact.href='mailto:'+config.supportEmail;contact.removeAttribute('target');contact.removeAttribute('rel');
      contact.querySelector('[data-contact-title]').textContent='Email support';
    }
    const copy=content.querySelector('#copy-install');
    if(copy)copy.addEventListener('click',async()=>{
      const url=content.querySelector('#install-url').textContent;
      const status=content.querySelector('#copy-status');
      try {
        if(navigator.clipboard && window.isSecureContext)await navigator.clipboard.writeText(url);
        else {const area=document.createElement('textarea');area.value=url;area.style.cssText='position:fixed;left:-9999px';document.body.append(area);try{area.select();if(!document.execCommand('copy'))throw new Error();}finally{area.remove();}}
        status.textContent='Copied. Paste into Unity Package Manager.';
      } catch {status.textContent='Select and copy the Git URL above.';}
    });
  }
  function render() {
    const key=location.hash.slice(1);
    const template=document.getElementById('content-'+key);
    if(!template) {
      active='';if(dialog.open)dialog.close();
      document.body.classList.remove('detail-open');
      document.title='SimpleTools — More time for your game';
      if(opener && document.contains(opener))opener.focus({preventScroll:true});
      return;
    }
    if(key===active && dialog.open)return;
    content.querySelectorAll('video').forEach(video=>video.pause());
    content.replaceChildren(template.content.cloneNode(true));
    active=key;
    const position=projects.indexOf(key);
    index.textContent=position>=0?String(position+1).padStart(2,'0')+' / 03':key==='about'?'The collection':'Get in touch';
    next.hidden=position<0;
    if(position>=0)next.setAttribute('aria-label','Next tool: '+titles[projects[(position+1)%projects.length]]);
    configure();
    document.title=titles[key]+' — SimpleTools';
    document.body.classList.add('detail-open');
    if(!dialog.open)dialog.showModal();
    dialog.scrollTop=0;
    dialog.querySelector('[data-close]').focus({preventScroll:true});
  }
  document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>{opener=link;}));
  function close(){history.pushState(null,'','#tools');render();}
  document.querySelectorAll('[data-close]').forEach(button=>button.addEventListener('click',close));
  dialog.addEventListener('cancel',event=>{event.preventDefault();close();});
  dialog.addEventListener('close',()=>{content.querySelectorAll('video').forEach(video=>video.pause());document.body.classList.remove('detail-open');});
  next.addEventListener('click',()=>{location.hash=projects[(projects.indexOf(active)+1)%projects.length];});
  window.addEventListener('hashchange',render);
  render();
})();
