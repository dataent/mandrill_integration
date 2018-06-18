dataent.pages['mandrill-integration'].on_page_load = function(wrapper) {
	var page = dataent.ui.make_app_page({
		parent: wrapper,
		title: 'Mandrill Integration',
		single_column: true
	});

	dataent.breadcrumbs.add("Integrations");

	$(dataent.render_template("permission_manager_help", {})).appendTo(page.main);
}
