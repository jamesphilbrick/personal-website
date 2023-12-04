const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<div class="container">
	<div class="header-name-title">
		<img src="resources/images/temp_title_name.jpg" alt="James Philbrick" class="header-name-title-image"></img>
	</div>
	<div class="header">
		<a class="home" href="/personal-website/index.html">Home</a>
		<a href="/personal-website/pages/contact.html">Contact</a>
		<a href="/personal-website/pages/about.html">About</a>
		<a class="blog" href="/personal-website/pages/blog.html">Blog</a>
	</div>
<div>
`;
document.body.appendChild(headerTemplate.content);
