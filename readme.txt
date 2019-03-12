=== AC CF7 Form Field Repeater ===
Contributors: ambercouch
Donate link: http://ambercouch.co.uk/
Tags: contact form 7, fields, forms, repeat, repeatable fields
Requires at least: 4.6
Tested up to: 5.1
Stable tag: 0.0.4
Requires PHP: 5.2.4
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Adds repeatable field groups to Contact Form 7.

== Description ==

A Contact Form 7 add on that allows you to create repeatable field groups. Tags that are inside the [acrepeater acffr-xxx] tag will a have the ability to be repeated when the user fills out the contact form. Input tags within repeated field tags can be used in the CF7 email template.

== Installation ==

Use WordPress' Add New Plugin feature, searching "AC CF7 Form Field Repeater", or download the archive and:

1. Upload the plugin files to the `/wp-content/plugins/ac-cf7-form-field-repeater` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress
3. Edit a contact form or create a new contact form with Contact Form 7
4. Use the AC Repeater form tag generator button in the Contact Form 7 editor to add the `[acrepeater acffr-xxx][/acrepeater]` tags to your contact form.
5. Use any Contact form 7 Tags, html or text inside the repeater tags `[acrepeater acffr-xxx]Name:[text another-name ][/acrepeater]`
6. Add the use the repeater tags in you email template `[acrepeater acffr-xxx]Name:[text another-name ][/acrepeater]`
7. Acrepeater tags should be on there own line.

```

[acrepeater acffr-xxx]
Name:[text another-name ] [text another-field ]
[/acrepeater]

```

This plugin requires the Contact Form 7 plugin to be installed and activated.


== Frequently Asked Questions ==

= What field can be repeated? =

Any native Contact Form 7 tags can be used within the `[acrepeater]` tags

== Screenshots ==

1. Example of the form template code.
2. Example of the email template code.
3. Example of the contact form

== Upgrade Notice ==

= 0.0.1 =
Initial version

= 0.0.4 =
We now support additional mail (Auto responder) and flamingo

== Changelog ==

= 0.0.2 =
* Fixed issues with function names

= 0.0.3 =
* Add support for additional mail ( Auto responder )

= 0.0.4 =
* Add support for flamingo
