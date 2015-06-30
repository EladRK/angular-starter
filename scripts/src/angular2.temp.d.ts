// Until we have angular2 official full TypeScript definitions
interface List<T> extends Array<T> { }
declare var require: any;
declare var __filename: string;
declare var __dirname: string;
declare var global: any;
declare var zone: any;
declare var Zone: any;

interface IRequestOptions { }
interface IRequest { }
interface IResponse { }
declare class Query { }
declare class RecordType { }
declare class TypeDecorator { }
declare class URLSearchParams { }
declare class ConnectionBackend { }
declare class Connection { }
declare class ReadyStates { }
declare class RequestMethods { }
declare class RequestModesOpts { }
declare class RequestCredentialsOpts { }
declare class RequestCacheOpts { }
declare class ResponseTypes { }
declare class ComponentRef { }

interface WeakMap<K, V> {
  clear(): void;
  delete(key: K): boolean;
  get(key: K): V;
  has(key: K): boolean;
  set(key: K, value?: V): WeakMap<K, V>;
  [Symbol.toStringTag]: string;
}

interface WeakMapConstructor {
  new <K, V>(): WeakMap<K, V>;
  new <K, V>(iterable: Iterable<[K, V]>): WeakMap<K, V>;
  prototype: WeakMap<any, any>;
}
declare var WeakMap: WeakMapConstructor;

interface Iterable<T> {
  [Symbol.iterator](): Iterator<T>;
}

interface IteratorResult<T> {
  done: boolean;
  value?: T;
}

interface Iterator<T> {
  next(): IteratorResult<T>;
  return?(value?: any): IteratorResult<T>;
  throw?(e?: any): IteratorResult<T>;
}

interface Symbol {
  toString(): string;
  valueOf(): Object;
  [Symbol.toStringTag]: string;
}

interface Map<K, V> { }

interface SymbolConstructor {
  prototype: Symbol;
  (description?: string|number): symbol;
  for(key: string): symbol;
  keyFor(sym: symbol): string;
  hasInstance: symbol;
  isConcatSpreadable: symbol;
  iterator: symbol;
  toPrimitive: symbol;
  toStringTag: symbol;
  unscopables: symbol;
}
declare var Symbol: SymbolConstructor;

declare module 'angular2/src/services/url_resolver' {
  class UrlResolver { }
}

declare module "angular2/src/facade/async" {
  class Observable { }
  class EventEmitter {
    next(val: any)
    return(val: any)
    throw(val: any)
  }
}

declare module "angular2/src/render/dom/shadow_dom/style_url_resolver" {
  class StyleUrlResolver { }
}

declare module "angular2/src/core/life_cycle/life_cycle" {
  class LifeCycle {
    tick(): any;
  }
}

declare module "zone.js" {
  var zone: any;
  var Zone: any;
}

// declare module "angular2/directives" {
//   function NgSwitch(): void;
//   function NgSwitchWhen(): void;
//   function NgSwitchDefault(): void;
//   function NgNonBindable(): void;
//   function NgIf(): void;
//   function NgFor(): void;
// 
//   var formDirectives: any;
//   var coreDirectives: any;
// 
// }
// 
// declare module "angular2/core" {
//   class EmulatedScopedShadowDomStrategy {
//     constructor(styleInliner: any, styleUrlResolver: any, styleHost: any)
//   }
//   class EmulatedUnscopedShadowDomStrategy {
//     constructor(styleUrlResolver: any, styleHost: any)
//   }
//   class NativeShadowDomStrategy {
//     constructor(styleUrlResolver: any)
//   }
//   class ShadowDomStrategy {}
// }

// declare module "angular2/src/facade/browser" {
//   var __esModule: boolean;
//   var win: any;
//   var document: any;
//   var location: any;
//   var gc: () => void;
//   const Event: any;
//   const MouseEvent: any;
//   const KeyboardEvent: any;
// }
// 
// declare module "angular2/src/router/browser_location" {
//   class BrowserLocation {
//     path(): string
//   }
// }
// 
// declare module "angular2/src/router/location" {
//   class Location {
//     normalize(url: string): string
//   }
// }
// 
declare module "angular2/router" {
  class Instruction { }
  class Router {
    navigate(url: string): Promise<any>;
    config(config: any): Promise<any>;
    deactivate(): Promise<any>;
    activate(instruction: Instruction): Promise<any>;
    recognize(url: string): Instruction;
    recognize(url: string): Instruction;
    renavigate(): Promise<any>;
    generate(name: string, params: any): string;
    subscribe(onNext: Function): void;
    registerOutlet(outlet: any, name: any)
  }
  var RouterOutlet: any;
  var RouterLink: any;
  var RouteParams: any;
  var routerInjectables: any;
  var RouteConfigAnnotation: any;
  var RouteConfig: any;
}
// 
// 
// declare module "angular2/src/dom/browser_adapter" {
//     class BrowserDomAdapter {
//         static makeCurrent(): void;
//         logError(error: any): void;
//         attrToPropMap: any;
//         query(selector: string): any;
//         querySelector(el: any, selector: string): Node;
//         querySelectorAll(el: any, selector: string): List<any>;
//         on(el: any, evt: any, listener: any): void;
//         onAndCancel(el: any, evt: any, listener: any): Function;
//         dispatchEvent(el: any, evt: any): void;
//         createMouseEvent(eventType: string): MouseEvent;
//         createEvent(eventType: any): Event;
//         getInnerHTML(el: any): any;
//         getOuterHTML(el: any): any;
//         nodeName(node: Node): string;
//         nodeValue(node: Node): string;
//         type(node: HTMLInputElement): string;
//         content(node: Node): Node;
//         firstChild(el: any): Node;
//         nextSibling(el: any): Node;
//         parentElement(el: any): any;
//         childNodes(el: any): List<Node>;
//         childNodesAsList(el: any): List<any>;
//         clearNodes(el: any): void;
//         appendChild(el: any, node: any): void;
//         removeChild(el: any, node: any): void;
//         replaceChild(el: Node, newChild: any, oldChild: any): void;
//         remove(el: any): any;
//         insertBefore(el: any, node: any): void;
//         insertAllBefore(el: any, nodes: any): void;
//         insertAfter(el: any, node: any): void;
//         setInnerHTML(el: any, value: any): void;
//         getText(el: any): any;
//         setText(el: any, value: string): void;
//         getValue(el: any): any;
//         setValue(el: any, value: string): void;
//         getChecked(el: any): any;
//         setChecked(el: any, value: boolean): void;
//         createTemplate(html: any): HTMLElement;
//         createElement(tagName: any, doc?: Document): HTMLElement;
//         createTextNode(text: string, doc?: Document): Text;
//         createScriptTag(attrName: string, attrValue: string, doc?: Document): HTMLScriptElement;
//         createStyleElement(css: string, doc?: Document): HTMLStyleElement;
//         createShadowRoot(el: HTMLElement): DocumentFragment;
//         getShadowRoot(el: HTMLElement): DocumentFragment;
//         getHost(el: HTMLElement): HTMLElement;
//         clone(node: Node): Node;
//         hasProperty(element: any, name: string): boolean;
//         getElementsByClassName(element: any, name: string): any;
//         getElementsByTagName(element: any, name: string): any;
//         classList(element: any): List<any>;
//         addClass(element: any, classname: string): void;
//         removeClass(element: any, classname: string): void;
//         hasClass(element: any, classname: string): any;
//         setStyle(element: any, stylename: string, stylevalue: string): void;
//         removeStyle(element: any, stylename: string): void;
//         getStyle(element: any, stylename: string): any;
//         tagName(element: any): string;
//         attributeMap(element: any): any;
//         hasAttribute(element: any, attribute: string): any;
//         getAttribute(element: any, attribute: string): any;
//         setAttribute(element: any, name: string, value: string): void;
//         removeAttribute(element: any, attribute: string): any;
//         templateAwareRoot(el: any): any;
//         createHtmlDocument(): Document;
//         defaultDoc(): Document;
//         getBoundingClientRect(el: any): any;
//         getTitle(): string;
//         setTitle(newTitle: string): void;
//         elementMatches(n: any, selector: string): boolean;
//         isTemplateElement(el: any): boolean;
//         isTextNode(node: Node): boolean;
//         isCommentNode(node: Node): boolean;
//         isElementNode(node: Node): boolean;
//         hasShadowRoot(node: any): boolean;
//         isShadowRoot(node: any): boolean;
//         importIntoDoc(node: Node): Node;
//         isPageRule(rule: any): boolean;
//         isStyleRule(rule: any): boolean;
//         isMediaRule(rule: any): boolean;
//         isKeyframesRule(rule: any): boolean;
//         getHref(el: Element): string;
//         getEventKey(event: any): string;
//         getGlobalEventTarget(target: string): EventTarget;
//         getHistory(): History;
//         getLocation(): Location;
//         getBaseHref(): any;
//     }
// }
// 
// declare module "angular2/angular2" {
//   function bootstrap(appComponentType: any, componentInjectableBindings?: Array<any>, errorReporter?: Function): Promise<ComponentRef>;
//   
//   var JitProtoChangeDetector: any;
//   var uninitialized: any;
//   var defaultPipes: any;
//   var ___esModule: any;
//   interface OnChange {}
//   var appComponentAnnotatedTypeToken: any;
//   interface TemplateLoader {}
//   interface ShadowDomStrategy {}
//   interface NativeShadowDomStrategy {}
//   interface EmulatedScopedShadowDomStrategy {}
//   interface EmulatedUnscopedShadowDomStrategy {}
//   var Ancestor: any;
//   var Parent: any;
//   var Attribute: any;
//   interface ControlDirective {}
//   interface ControlGroupDirective {}
//   interface RequiredValidatorDirective {}
//   interface EventDispatcher {}
// }
// 
declare module "angular2/di" {

  function bind(token: any): any;
  class Injector {
    resolveAndCreateChild(bindings: [any]): Injector;
  }
  var Binding: any;
  var ResolvedBinding: any;
  var Dependency: any;
  var Key: any;
  var KeyRegistry: any;
  var TypeLiteral: any;
  var NoBindingError: any;
  var AbstractBindingError: any;
  var AsyncBindingError: any;
  var CyclicDependencyError: any;
  var InstantiationError: any;
  var InvalidBindingError: any;
  var NoAnnotationError: any;
  var OpaqueToken: any;
  var ___esModule: any;
  var InjectAnnotation: any;
  var InjectPromiseAnnotation: any;
  var InjectLazyAnnotation: any;
  var OptionalAnnotation: any;
  var InjectableAnnotation: any;
  var DependencyAnnotation: any;
  var Inject: any;
  var InjectPromise: any;
  var InjectLazy: any;
  var Optional: any;
  var Injectable: any;
}

declare module "angular2/http" {
  export interface IHttp { (url: string, options?: IRequestOptions): any }
  export interface ConnectionBackend {
    createConnection(observer: any, config: IRequest): Connection;
  }

  export class ReadyStates { }

  export interface Connection {
    readyState: ReadyStates;
    request: IRequest;
    response: Rx.Subject<IResponse>;
    dispose(): void;
  }

  export class Headers {
    _headersMap: Map<string, List<string>>;
    append(name: string, value: string): void;
    delete(name: string): void;
    forEach(fn: Function);
    get(header: string): string;
    has(header: string);
    keys();
    set(header: string, value: string | List<string>): void;
    values();
    getAll(header: string): Array<string>;
    entries();
  }

  export interface IRequestOptions {
    method?: any;
    headers?: Headers;
    body?: FormData | Blob | string;
    mode?: any;
    credentials?: any;
    cache?: any;
  }

  export interface IRequest {
    method: any;
    mode: any;
    credentials: any;
  }

  export interface ResponseOptions {
    status?: number;
    statusText?: string;
    headers?: Headers | Object;
    type?: any;
    url?: string;
  }

  export interface IResponse {
    headers: Headers;
    ok: boolean;
    status: number;
    statusText: string;
    type: any;
    url: string;
    totalBytes: number;
    bytesLoaded: number;
    blob(): Blob;
    arrayBuffer(): ArrayBuffer;
    text(): string;
    json(): Object;
  }

  export class Http {
    request(url: string | Request, options?: IRequestOptions): Rx.Observable<Response>;
    get(url: string, options?: IRequestOptions);
    post(url: string, body: FormData | Blob | string, options?: IRequestOptions);
    put(url: string, body: FormData | Blob | string, options?: IRequestOptions);
    delete(url: string, options?: IRequestOptions);
    patch(url: string, body: FormData | Blob | string, options?: IRequestOptions);
    head(url: string, options?: IRequestOptions);
  }

  export class Request implements IRequest {
    method: RequestMethods;
    mode: RequestModesOpts;
    credentials: RequestCredentialsOpts;
    headers: Headers;
    url: string;
    text(): String;
  }

  export class Response implements IResponse {
    type: ResponseTypes;
    ok: boolean;
    url: string;
    status: number;
    statusText: string;
    bytesLoaded: number;
    totalBytes: number;
    headers: Headers;
    blob(): Blob;
    json(): JSON;
    text(): string;
    arrayBuffer(): ArrayBuffer;
  }

  class ResponseTypes { }

  export class httpInjectables { }
}
