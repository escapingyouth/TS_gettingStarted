import { Draggable } from '../models/drag-drop.js';
import { Component } from './base-component.js';
import { Project } from '../models/project.js';
import { AutoBind } from '../decorators/autobind.js';

// ProjectItem Class
export class ProjectItem
	extends Component<HTMLUListElement, HTMLLIElement>
	implements Draggable
{
	private project: Project;

	get persons() {
		if (this.project.people === 1) {
			return '1 person assigned';
		} else {
			return `${this.project.people} persons assigned`;
		}
	}

	constructor(hostId: string, project: Project) {
		super('single-project', hostId, false, project.id);
		this.project = project;

		this.configure();
		this.renderContent();
	}
	@AutoBind
	dragStartHandler(event: DragEvent): void {
		event.dataTransfer!.setData('text/plain', this.project.id);
		event.dataTransfer!.effectAllowed = 'move';
	}
	dragEndHandler(_: DragEvent): void {}

	configure(): void {
		this.element.addEventListener('dragstart', this.dragStartHandler);
		this.element.addEventListener('dragend', this.dragEndHandler);
	}
	renderContent(): void {
		this.element.querySelector('h2')!.innerText = this.project.title;
		this.element.querySelector('h3')!.innerText = this.persons;
		this.element.querySelector('p')!.innerText = this.project.description;
	}
}
