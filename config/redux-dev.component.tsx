import * as React from 'react';
import {createDevTools} from 'redux-devtools';
import DockMonitor from "redux-devtools-dock-monitor";
import MultipleMonitors from 'redux-devtools-multiple-monitors';
import DiffMonitor from 'redux-devtools-diff-monitor';
import Inspector from 'redux-devtools-inspector';
import Dispatcher from 'redux-devtools-dispatch';

export const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h'
                 changePositionKey='ctrl-q'
                 changeMonitorKey='ctrl-m'
                 defaultPosition="right"
                 defaultIsVisible={false}>
        <MultipleMonitors>
            <DiffMonitor theme='tomorrow'/>
            <Dispatcher />
        </MultipleMonitors>
        <MultipleMonitors>
            <Inspector/>
            <Dispatcher />
        </MultipleMonitors>
    </DockMonitor>
);