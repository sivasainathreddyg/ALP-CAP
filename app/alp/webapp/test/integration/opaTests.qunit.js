sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/alp/test/integration/FirstJourney',
		'com/alp/test/integration/pages/BooksAnalyticsList',
		'com/alp/test/integration/pages/BooksAnalyticsObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksAnalyticsList, BooksAnalyticsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/alp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksAnalyticsList: BooksAnalyticsList,
					onTheBooksAnalyticsObjectPage: BooksAnalyticsObjectPage
                }
            },
            opaJourney.run
        );
    }
);