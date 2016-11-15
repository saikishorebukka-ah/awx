/*************************************************
 * Copyright (c) 2016 Ansible, Inc.
 *
 * All Rights Reserved
 *************************************************/

import hostStatusBar from './host-status-bar/main';
import jobResultsStdOut from './job-results-stdout/main';
import hostEvent from './host-event/main';

import route from './job-results.route.js';

import jobResultsController from './job-results.controller';

import jobResultsService from './job-results.service';
import eventQueueService from './event-queue.service';
import parseStdoutService from './parse-stdout.service';

import durationFilter from './duration.filter';

export default
    angular.module('jobResults', [hostStatusBar.name, jobResultsStdOut.name, hostEvent.name])
        .run(['$stateExtender', function($stateExtender) {
            $stateExtender.addState(route);
        }])
        .controller('jobResultsController', jobResultsController)
        .service('jobResultsService', jobResultsService)
        .service('eventQueue', eventQueueService)
        .service('parseStdoutService', parseStdoutService)
        .filter('duration', durationFilter);
