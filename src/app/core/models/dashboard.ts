export interface Dashboard {
    ytd: number;
    newUserCount: number;
}

export interface Monitors {
    available_monitors: Array<Object>,
    expanded_monitors: Array<String>
}