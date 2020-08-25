import { OnInit, OnDestroy, DoCheck, EventEmitter, ElementRef, ChangeDetectorRef } from '@angular/core';
import { PerfectScrollbarDirective } from './perfect-scrollbar.directive';
import { PerfectScrollbarConfigInterface } from './perfect-scrollbar.interfaces';
export declare class PerfectScrollbarComponent implements OnInit, OnDestroy, DoCheck {
    private cdRef;
    private elementRef;
    states: any;
    indicatorX: boolean;
    indicatorY: boolean;
    interaction: boolean;
    private stateTimeout;
    private stateSub;
    private scrollPositionX;
    private scrollPositionY;
    private scrollDirectionX;
    private scrollDirectionY;
    private usePropagationX;
    private usePropagationY;
    private allowPropagationX;
    private allowPropagationY;
    private stateUpdate;
    disabled: boolean;
    usePSClass: boolean;
    autoPropagation: boolean;
    scrollIndicators: boolean;
    config: PerfectScrollbarConfigInterface;
    directiveRef: PerfectScrollbarDirective;
    PS_SCROLL_Y: EventEmitter<any>;
    PS_SCROLL_X: EventEmitter<any>;
    PS_SCROLL_UP: EventEmitter<any>;
    PS_SCROLL_DOWN: EventEmitter<any>;
    PS_SCROLL_LEFT: EventEmitter<any>;
    PS_SCROLL_RIGHT: EventEmitter<any>;
    PS_Y_REACH_END: EventEmitter<any>;
    PS_Y_REACH_START: EventEmitter<any>;
    PS_X_REACH_END: EventEmitter<any>;
    PS_X_REACH_START: EventEmitter<any>;
    constructor(cdRef: ChangeDetectorRef, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngDoCheck(): void;
    private checkPropagation(event, deltaX, deltaY);
    onWheelEvent(event: WheelEvent): void;
    onTouchEvent(event: TouchEvent): void;
    onScrollEvent(event: Event, state: string): void;
}
