import { Project, ProjectStatus } from '../models/project.js';

// Project State Management
type Listener = (items: Project[]) => void;

export class ProjectState {
	private listeners: Listener[] = [];
	private projects: Project[] = [];
	private static instance: ProjectState;

	private constructor() {}

	static getInstance() {
		if (this.instance) {
			return this.instance;
		}
		this.instance = new ProjectState();
		return this.instance;
	}

	addListener(listenerFn: Listener) {
		this.listeners.push(listenerFn);
	}

	addProject(title: string, description: string, people: number) {
		const newProject = new Project(
			Math.random().toString(),
			title,
			description,
			people,
			ProjectStatus.Active
		);
		this.projects.push(newProject);
		for (let listenerFn of this.listeners) {
			listenerFn(this.projects.slice());
		}
	}
	moveProject(projectId: string, newStatus: ProjectStatus) {
		const project = this.projects.find((project) => project.id === projectId);
		if (project && project.status !== newStatus) {
			project.status = newStatus;
			this.updateListeners();
		}
	}
	private updateListeners() {
		for (let listenerFn of this.listeners) {
			listenerFn(this.projects.slice());
		}
	}
}

export const projectState = ProjectState.getInstance();
