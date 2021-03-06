export const baseValue: unique symbol;
export const optsValue: unique symbol;
export const menuValue: unique symbol;
export const idValue: unique symbol;
export const typeValue: unique symbol;
export const versionValue: unique symbol;
export const topicValue: unique symbol;

export declare const REQUESTROUTE: string;
export declare const RESTAPIROUTE: string;
export declare const PROJECTROUTE: string;

export declare type RequestActionType = 'open' | 'detail' | 'edit';
export declare type ProjectActionType = 'open' | 'edit' | 'replaceWorkspace' | 'addWorkspace';

/**
 * An event to be dispatched to trigger a navigation in Advanced REST Client.
 * It is the base for other events
 */
export declare class ARCNavigationRouteEvent extends CustomEvent<void> {
  /**
   * The base route to navigate to used to initialize this event.
   */
  get route(): string;

  /**
   * @param type Event type
   * @param route The base route to navigate to.
   */
  constructor(type: string, route: string);
}

/**
 * An event to be dispatched to trigger a navigation in Advanced REST Client.
 * Use other events matching the navigation type before using this event.
 * This mean to be a general purpose event to limit number of event definitions
 * if unnecessary.
 */
export declare class ARCNavigationEvent extends CustomEvent<any> {
  /**
   * The base route to navigate to used to initialize this event.
   */
  get route(): string;

  /**
   * @param route The base route to navigate to.
   * @param opts Additional route parameters
   */
  constructor(route: string, opts?: any);
}

/**
 * An event to be dispatched to popup a menu to a new window
 */
export declare class ARCMenuPopupEvent extends CustomEvent<void> {
  /**
   * The name of the menu used to initialize this event.
   */
  get menu(): string;

  /**
   * @param menu The name of the menu
   */
  constructor(menu: string);
}

/**
 * - open: open request in the current workspace
 * - edit: edit request meta data
 * 
 * @deprecated Use types declaration instead.
 */
declare interface RequestActions {
  open: string;
  edit: string;
  detail: string;
}
export declare const RequestActions: RequestActions;

/**
 * An event to be dispatched to trigger a navigation for an ARCRequest object in Advanced REST Client
 */
export declare class ARCRequestNavigationEvent extends ARCNavigationRouteEvent {
  /**
   * The id of the ARCRequest entity used to initialized this object.
   */
  get requestId(): string;
  /**
   * The type of the request used to initialize this event.
   */
  get requestType(): string;

  /**
   * The action to perform when navigation is being handled.
   */
  get action(): string;

  /**
   * @param requestId The id of the ARCRequest entity
   * @param requestType The type of the request
   * @param action Optional navigation action. Default to "open" action.
   */
  constructor(requestId: string, requestType: string, action?: string);
}

/**
 * An event to be dispatched to trigger a navigation for a REST API in Advanced REST Client
 */
export declare class ARCRestApiNavigationEvent extends ARCNavigationRouteEvent {
  /**
   * The id of the ARCRestApiIndex entity used to initialized this object.
   */
  get api(): string;
  /**
   * The requested API version used to initialize this event.
   */
  get version(): string;
  /**
   * The action type used to initialize this event.
   */
  get action(): string;

  /**
   * @param api The id of the ARCRestApiIndex entity
   * @param requestType The requested API version
   * @param action The action type: list, documentation
   */
  constructor(api: string, version: string, action: string);
}

/**
 * @deprecated Use types declaration instead.
 */
declare interface ProjectActions {
  /** 
   * Opens project screen
   */
  open: string
  /** 
   * Edits project meta
   */
  edit: string
  /** 
   * Clears the workspace and adds project requests to it
   */
  replaceWorkspace: string
  /** 
   * Adds project requests to the current workspace
   */
  addWorkspace: string
}

export declare const ProjectActions: ProjectActions;

/**
 * An event to be dispatched to trigger a navigation for an ARCProject in Advanced REST Client
 */
export declare class ARCProjectNavigationEvent extends ARCNavigationRouteEvent {
  /**
   * The ID of the ARCProject entity used to initialized this object.
   */
  get id(): string;
  /**
   * The action type used to initialize this event.
   */
  get action(): string;

  /**
   * @param id The ID of the ARCProject entity
   * @param action The action type: `open`, `edit`. Default to `open`.
   */
  constructor(id: string, action?: string);
}

export declare interface ExternalNavigationOptions {
  /**
   * The purpose of the navigation. This can be used
   * to differentiate different kind of requests.
   */
  purpose?: string;
}

/**
 * An event to be dispatched when an external navigation is requested.
 * The event contains the `url` property that describes the URL to navigate to
 * and the `detail` with additional navigation options.
 */
export declare class ARCExternalNavigationEvent extends CustomEvent<ExternalNavigationOptions> {
  /**
   * The URL to navigate to used to initialize this event.
   */
  get url(): string;
  /**
   * @param url The URL to open
   * @param detail Additional request parameters
   */
  constructor(url: string, detail?: ExternalNavigationOptions);
}

/**
 * An event to be dispatched when a help topic is being requested by the user.
 */
export declare class ARCHelpTopicEvent extends Event {
  /**
   * The help topic used to initialize this event.
   */
  get topic(): string;

  [topicValue]: string;

  /**
   * @param topic The help topic to open.
   */
  constructor(topic: string);
}
