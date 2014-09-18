
== Appearance ==

The entire application is composed of small applications.
The application in the center shows an editable document.
All other applications around the centered application show read-only contents or open tasks.

There are some basic types of small applications which serve different purposes:
* allow the user to edit a document,
* show a summary of a document,
* show a list of documents,
* allow the user to search documents,
* show a report,
* show open tasks.

When documents are changed recently links to them pulsate. The frequency of the pulsation is higher if the document is changed by someone else.

If a link to a document or a summary of a document is drawn to the center then the entire document is shown there and it can be edited.

For objects with a lifecycle a state transition graph is shown if appropriate. Transitions are gray if they are defined but not used. The more the transitions are used the darker is their appearance in the graph.

When a user is going to change a part of a document, the most useful applications are placed around the document.

Each document has a history that describes who changed what when.

== Change management ==

The delivered framework supports the following scenario: A product manager and a developer meet a customer to discuss new features. During the discussion the developer immediately changes the system so that at the end of the meeting the new features are implemented and ready for production.

The following kind of features can be implemented immediately :
* add: new type of documents including masks to edit the documents, to search the documents, and to show summaries of the documents,
* autosuggestion for all input fields,
* change: validation rules,
* change: default mask to edit the documents, custom masks to edit the documents,
* change: customized Twitter bootstrap and JQuery UI styles,
* change: workers who automatically execute tasks.

The changes do not require a downtime of the system.

Constraints: The customer must provide all the needed information, i.e. if the customer asks for Hungarian texts but there is no Hungarian speaker around, the feature cannot be implemented instantly.

The documentation of each feature and its state (new, tested) is accessible within the application.

Hint: The domain of the customer's problem must be modelled as documents, task documents. A task document describes a service that changes more than one document.

== Technical details ==

There is no testing outside of the application. Tests can be run within the application. Test results are shown and saved in the application. Exception: Integration tests.

The application is highly modularized: Texts can be modules that are separately deployed. More than one version of the same application can be deployed. If one version fails the user can use the other version.

If a custom mask is broken, then the default mask can be used. The latter one never fails but has no optimized usability.

Automatically executed tasks are browsable and its parts can be viewed in detail. 
