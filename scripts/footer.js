const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
	<div class="footer">
		<p>This is the footer. (c) James Philbrick 2023</p>
	</div>
`;
document.body.appendChild(footerTemplate.content);