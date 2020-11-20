/*!*************************************************************************************************
 * gulpfile.js
 * -------------------------------------------------------------------------------------------------
 * SUMMARY: Gulp automation task definition file for setting up tasks that build files
 *    containingcustom custom CSS and JS code for use on the WSUWP website of the Motivating
 *    Innovation and Research (MIRA) program at Washington State University (WSU).
 *
 * DESCRIPTION: This gulp automation task definition file is designed for use on the following
 *    project that is maintained on GitHub:
 *
 *   https://github.com/invokeImmediately/mira.wsu.edu
 *
 *   It relies on development dependencies pulled in from these DAESA front-end web development
 *    projects:
 *
 *   https://github.com/invokeImmediately/WSU-UE---CSS
 *   https://github.com/invokeImmediately/WSU-DAESA-JS
 *
 * AUTHOR: Daniel Rieck [daniel.rieck@wsu.edu] (https://github.com/invokeImmediately)
 *
 * LICENSE: MIT - Copyright (c) 2020 Washington State University
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 *    and associated documentation files (the “Software”), to deal in the Software without
 *    restriction, including without limitation the rights to use, copy, modify, merge, publish,
 *    distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the
 *    Software is furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in all copies or
 *    substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 *    BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 *    DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 **************************************************************************************************/

////////////////////////////////////////////////////////////////////////////////////////////////////
// TABLE OF CONTENTS
// -----------------
// §1: Gulp task dependencies..................................................................54
// §2: Specificiation of build settings .......................................................59
//   §2.1: getCssBuildSettings()...............................................................62
//   §2.2: getJsBuildSettings()...............................................................113
// §3: Entry point: Set up of build taks......................................................145
////////////////////////////////////////////////////////////////////////////////////////////////////

( function() {

'use strict';

////////////////////////////////////////////////////////////////////////////////////////////////////
// §1: Gulp task dependencies

var gulpBuilder = require( './WSU-DAESA-JS/gulpCssJsBuilder.js' );

////////////////////////////////////////////////////////////////////////////////////////////////////
// §2: Specificiation of build settings 

////////
// §2.1: getCssBuildSettings()

/**
 * Get the settings for a gulp-mediated custom CSS build from Less source files.
 *
 * @return {object} - Instance of gulpBuilder.CssBuildSettings.
 */
function getCssBuildSettings() {
	return new gulpBuilder.CssBuildSettings( {
		commentRemovalNeedle: /^(?:[ \t]*)?\/\*[^!].*$\n(?:^\*\*?[^/].*$\n)*\*\*?\/\n\n?/gm,
		dependenciesPath: './WSU-UE---CSS/',
		destFolder: './CSS/',
		fontImportStr: '@import url(\'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wgh' +
			't@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&family=PT+Serif:ital,wght@0,400;0,' +
			'700;1,400;1,700&family=Roboto+Condensed:ital,wght@0,400;0,700;1,400;1,700&family=Rob' +
			'oto+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap\');\r\n',
			'before': /^@media/,
		insertingMediaQuerySectionHeader: {
			before: /^@media/,
			lineBefore: '/*! ==========================================================================' +
				'======================\r\n*** Media queries section\r\n*** =============================' +
				'===================================================================\r\n*** SUMMARY: Medi' +
				'a queries built from precompiled CSS written in the Less language extension of\r\n***   ' +
				'CSS. Queries in this section are a combination of those designed for use on all websites' +
				'\r\n***   managed by WSU DAESA and those intended specifically for use on the DAESA webs' +
				'ite.\r\n***\r\n*** DESCRIPTION: Fully documented, precompiled source code from which thi' +
				's section of the custom\r\n***   stylesheet was built is developed and maintained on the' +
				' following two GitHub projects:\r\n***     https://github.com/invokeImmediately/WSU-UE--' +
				'-CSS/\r\n***     https://github.com/invokeImmediately/mira.wsu.edu/\r\n***\r\n*** AUTHOR' +
				': Daniel Rieck [daniel.rieck@wsu.edu] (https://github.com/invokeImme' +
				'diately)\r\n***\r\n*** LICENSE: ISC - Copyright (c) 2020 Daniel C. Rieck.\r\n***\r\n*** ' +
				'  Permission to use, copy, modify, and/or distribute this software for any purpose with ' +
				'or\r\n***   without fee is hereby granted, provided that the above copyright notice and ' +
				'this permission\r\n***   notice appear in all copies.\r\n***\r\n***   THE SOFTWARE IS PR' +
				'OVIDED "AS IS" AND DANIEL C. RIECK DISCLAIMS ALL WARRANTIES WITH REGARD TO\r\n***   THIS' +
				' SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT\r' +
				'\n***   SHALL DANIEL C. RIECK BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENT' +
				'IAL DAMAGES OR\r\n***   ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFI' +
				'TS, WHETHER IN AN ACTION OF\r\n***   CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARIS' +
				'ING OUT OF OR IN CONNECTION WITH THE USE OR\r\n***   PERFORMANCE OF THIS SOFTWARE.\r\n**' +
				'* ======================================================================================' +
				'==========\r\n**/',
			stopAfterFirstMatch: true
		},
		minCssFileExtension: '.min.css',
		minCssFileHeaderStr: '',
		sourceFile: './CSS/esteemed-custom.less'
	} );
}

////////
// §2.2: getJsBuildSettings()

/**
 * Get the settings for a gulp-mediated custom JS build.
 *
 * @return {object} - Simple collection of settings for JS builds.
 */
function getJsBuildSettings() {
	return {
		buildDependenciesList: [
			'./WSU-DAESA-JS/jQuery.oue-custom.js',
			'./WSU-DAESA-JS/jQuery.oue-animate.js',
			'./WSU-DAESA-JS/jQuery.cookieObjs.js',
			'./WSU-DAESA-JS/jQuery.forms.js',
			'../jQuery.AreYouSure/jquery.are-you-sure.js',
			'./WSU-DAESA-JS/jQuery.are-you-sure.js',
			'../qTip2/dist/jquery.qtip.min.js',
			'./WSU-DAESA-JS/jQuery.qTip.js',
			'./WSU-DAESA-JS/jQuery.css-data.js',
			'./WSU-DAESA-JS/jQuery.textResize.js',
			'./WSU-DAESA-JS/jQuery.masonry-custom.js',
			'./JS/esteemed-specific.js'
		],
		commentNeedle: /^(\/\*)(?!!)/g,
		compiledJsFileName: 'esteemed-custom.js',
		destFolder: './JS/',
		minJsFileExtension: '.min.js',
		replaceCallback: gulpBuilder.fixFileHeaderComments
	};
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// §3: Entry point: Set up of build taks

gulpBuilder.setUpCssBuildTask( getCssBuildSettings() );
gulpBuilder.setUpJsBuildTask( getJsBuildSettings() );
gulpBuilder.setUpHelpTask();
gulpBuilder.setUpDefaultTask();

} )();
