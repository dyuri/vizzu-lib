import DomHelper from "./dom-helper.js";

export default class Section
{
	constructor(element)
	{
		this.id = DomHelper.parseId(element).id;
		this.element = element;
	}

	setMenu(element)
	{
		this.menuElement = element;

		this.menuElement.onclick = () => {
			history.pushState({ id: this.id }, '', `#chapter-${this.id}`)
			this.element.scrollIntoView({ behavior: 'smooth' });
		};
	}

	select(selected)
	{
		let list = this.menuElement.classList;
		if (selected) list.add('submenuitem-selected');
		else list.remove('submenuitem-selected');
	}

}