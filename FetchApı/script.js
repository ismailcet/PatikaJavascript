let itemList=document.querySelector('.itemList');
fetch('https://jsonplaceholder.typicode.com/posts').then(
    response=>response.json()
    ).then(items=>items.forEach(item=>{
        let liDom=document.createElement('li');
        console.log(item.title)
        liDom.innerHTML=item.title;
        itemList.append(liDom)
    }
));