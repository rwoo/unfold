This module contains the code that is not domain-specific.

This module focuses on UI.

The Vision
==========

The UI focuses on documents that are results of intellectual work and any kind of craftsmanship. These documents
have have to get more emphasis than the documents that have merely contributed to its evolution.
We value them and the UI shall express this appreciation.

All other documents that contributed to the final document are set in context to the final document and its
role in its evolution.

If a new document comes into the center of the view, the summaries of related documents open up
as a hand held fan does.

The related documents are positioned around the pivotal document and they spread on circular pathways.

When the user decides to move another document to the center of the view, then the summary of the 
chosen document *unfolds* and moves to the center of the view. For that movement a summary is considered 
a flat bunch of typographic elements that overlay each other. When the summary moves to centre the 
single pieces drift apart on spiral pathways to their final positions on the unfold representation. 
The older documents fades out. The documents related to the new pivotal document replace the old 
documents by pushing them away, again on circular pathways.

When a user positions her mouse over a summary or document, then the related documents are emphasied 
depending on the strength of the relationship.

It is possible to browse through the documents of the folder the pivotal document belongs to. When the
user decides to do this, the summaries that belong that documents disappear behind the pivotal document.
Browsing resembles the conventional browsing in a book apart from that the documents are considered 
transparent or almost transparent as soon as the user starts to turn the page. This way it looks as 
only the typeset is moved.


Possible Claims
===============

Build tools instead of rails.
Immediate connection. [Referring to the great talk]
Implemented twice.


Technical details
=================

Summaries are different representations of documents. For a specific summary it is always defined which
documents have contributed to its content. A document can be numerous summaries, each for a different
purpose.

We call the document and the summaries around the default dashboard.
The user can define other dashboards. The elements of the dashboards shall be flat and shall not contain
expandable or nested content.

We provide another dashboard to positions two documents side on side, which makes comparison easy.

To resize a summary it will be moved to the center of the view and then resized.   

If a document or its summary has been modified within the last five minutes then the style of the 
identifier of the document conveys that information. The text of the identifier might pulsate. This
has to be true for all visible appearances of the identifier. If the document was modified by another
user, the style must convey this information as well.

Changes to documents are visualized (push).

The preferred format for asynchronous messages should be the Internet Message Format (RFC 5322).

Modal dialogs are forbidden because they can prevent the user from doing what she wants to
if the rules of the application are not appropriate for the current use case.


Quality management
====================

As much as possible features shall be considered optional. Only the remaining features, the 
indispensable features must be tested automatically.

If possible each written line of code must be tested only once.
A component or featre is tested only once - after the change. But not after the change
of other components.

Graceful degradation is preferred to continuous deployment, i.e. there multiple ways to
do something in the application and at least one way should work. In general the user
can choose which way to go. Or the administrator can define which way to go (feature toggle).

Errorneous components never prevent the release of new features. Components get a state 
regarding its maturity and evolution. This the state informs about test results, last
modification and so on. A test report may contain a message like "last version successfully 
tested both automatically and manually due to the feature request ABC-123". 
The state of the components must be visualized to the user.

If user faces graceful degradation, the application must inform the maintainer of the
application immediately.   

Transactions
============

Transactions are modelled as ToDo lists. The user must be able to finish transactions
manually.

Auditing
=========

Change histories are managed documents. They cannot be changed "manually". This differs 
from the abilities Git provides. Change histories allow the user to look for term in changes.

Changes can be commented - as in Wikis.

 
Organisation
=============

All or almost all features of the system shall be developed in parallel - without disadvantages.
Thus compilation dependencies shall be avoided.

Each artifact becomes part of the application and provides a benefit for the user.

If one component breaks all other components shall still work.
 


Written by rwoo 2014.