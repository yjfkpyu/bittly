module.exports = {
    moduleName : 'Test',
    timeout : 'Timeout',
    beforeScript : 'Before script',
    afterScript : 'After script',
    requestParams : 'Request Params',
    expectResponseContent : 'Expect Response Content',
    actualResponseContent : 'Acutal Response Content',
    testcaseDeleteConfirm : 'Are you sure you want to delete this testcase ?',
    testcaseResponseFormatEmpty : 'Please config expect response data.',
    directiveExecutorError : 'failed to execute directive : {0}',
    testcaseExecuteAll : 'Execute all testcases',
    testcaseExecuteAllStop : 'Stop batch executing',
    testcaseExecuteSummaryTitle : 'Testing Done',
    testcaseExecuteSummaryDuration : 'Duration',
    testcaseExecuteSummaryTotalCount : 'Testcase total count',
    testcaseExecuteSummaryStatusCount : 'Testcase execute summary',
    testcaseExecuteStatusPass : 'Pass',
    testcaseExecuteStatusNotPass : 'Error',
    exportTestReport : 'Test Report',
    beforeScriptExecuteFailed : 'Before script execute failed : {0}',
    afterScriptExecuteFailed : 'After script execute failed : {0}',
    parameterFormat : 'Param Formamt',
    responseFormat : 'Expect Response Format',
    
    // Functional test
    functionalNode : {
        Start : require('../functional/node/start/i18n/en.lang.js'),
        Variable : require('../functional/node/variable/i18n/en.lang.js'),
        ActHub : require('../functional/node/acthub/i18n/en.lang.js'),
        Delay : require('../functional/node/delay/i18n/en.lang.js'),
        Script : require('../functional/node/script/i18n/en.lang.js'),
        If : require('../functional/node/if/i18n/en.lang.js'),
        Loop : require('../functional/node/loop/i18n/en.lang.js'),
        Directive : require('../functional/node/directive/i18n/en.lang.js'),
        Read : require('../functional/node/read/i18n/en.lang.js'),
    },

    editModal : {
        title : 'Testcase Edit',
        titleDefault : '{0} Testcase @ {1}',
        titlePlaceholder : 'Testcase name',
        testcaseSaveSuccessed : 'Testcase saved',
        testcaseSaveFailed : 'Testcase save failed',
        createNewTestcase : 'Create new testcase',
        settings : 'Settings',
        comparatorEqual : 'Equal',
        comparatorIgnore : 'Ignore',
        comparatorNotEqual : 'Not Equal',
        comparatorGreater : 'Greater Than',
        comparatorGreaterOrEqual : 'Greater Or Equal',
        comparatorLess : 'Less Than',
        comparatorLessOrEqual : ' Less Or Equal',
        comparatorBetween : 'Between',
        comparatorNotBetween : 'Not Between',
        comparatorContains : 'Contains',
        comparatorNotContains : 'Not Contains',
    },
    exportHtml : {
        headerDirectiveName : 'Directive',
        headerTestcaseName : 'Testcase',
        headerStatus : 'Status',
        headerParamsFormat : 'Param Formamt',
        headerParamsContent : 'Params',
        headerExpectResponseFormat : 'Expect Response Format',
        headerExpectResponseContent : 'Expect Response',
        headerActualResponseContent : 'Actual Response',
    },
    exportExcel : {
        sheetName : 'Test Report',
        headerDirectiveName : 'Directive',
        headerTestcaseName : 'Testcase',
        headerStatus : 'Status',
        headerParamsFormat : 'Param Formamt',
        headerParamsContent : 'Params',
        headerExpectResponseFormat : 'Expect Response Format',
        headerExpectResponseContent : 'Expect Response',
        headerActualResponseContent : 'Actual Response',
    },
    testResultReportName : '{0} Test Report {1}',
    valueEmpty : 'Empty',
};