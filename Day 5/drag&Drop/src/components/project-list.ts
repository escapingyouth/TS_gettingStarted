import { DragTarget } from '../models/drag-drop.js';
import { Component } from './base-component.js';
import { Project } from '../models/project.js';
import { AutoBind } from '../decorators/autobind.js';
import { ProjectStatus } from '../models/project.js';
import { projectState } from '../state/project-state.js';
import { ProjectItem } from './project-item.js';

// ProjectList Class
export class ProjectList
	extends Component<HTMLDivElement, HTMLElement>
	implements DragTarget
{
	assignedProjects: Project[];

	constructor(private type: 'active' | 'finished') {
		super('project-list', 'app', false, `${type}-projects`);

		this.assignedProjects = [];

		this.configure();
		this.renderContent();
	}

	@AutoBind
	dragOverHandler(event: DragEvent): void {
		if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
			event.preventDefault();
			const listEl = this.element.querySelector('ul')! as HTMLUListElement;
			listEl.classList.add('droppable');
		}
	}

	@AutoBind
	dropHandler(event: DragEvent): void {
		const projectId = event.dataTransfer!.getData('text/plain');
		projectState.moveProject(
			projectId,
			this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished
		);
	}

	@AutoBind
	dragLeaveHandler(_: DragEvent): void {
		const listEl = this.element.querySelector('ul')! as HTMLUListElement;
		listEl.classList.remove('droppable');
	}

	configure(): void {
		this.element.addEventListener('dragover', this.dragOverHandler);
		this.element.addEventListener('dragleave', this.dragLeaveHandler);
		this.element.addEventListener('drop', this.dropHandler);

		projectState.addListener((projects: Project[]) => {
			const relevantProjects = projects.filter((project) => {
				if (this.type === 'active') {
					return project.status === ProjectStatus.Active;
				}
				return project.status === ProjectStatus.Finished;
			});
			this.assignedProjects = relevantProjects;
			this.renderProjects();
		});
	}
	renderContent() {
		const listId = `${this.type}-projects-list`;
		this.element.querySelector('ul')!.id = listId;
		this.element.querySelector(
			'h2'
		)!.innerText = `${this.type.toUpperCase()} PROJECTS`;
	}
	private renderProjects() {
		const listEl = document.getElementById(
			`${this.type}-projects-list`
		)! as HTMLUListElement;
		listEl.innerHTML = '';
		this.assignedProjects.forEach((projectItem) => {
			new ProjectItem(this.element.querySelector('ul')!.id, projectItem);
		});
	}
}
