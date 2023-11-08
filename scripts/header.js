const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
	<div class="header">
			<a class="home" href="index.html">Home</a>
			<a href="contact.html">Contact</a>
			<a href="about.html">About</a>
			<a class="blog" href="blog.html">Blog</a>
	</div>
`;
document.body.appendChild(headerTemplate.content);