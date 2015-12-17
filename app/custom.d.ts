declare module ng2Redux {
  export function provider (store : any) : any;
}

declare module "ng2-redux" {
    export = ng2Redux;
}
