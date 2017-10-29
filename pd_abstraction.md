---
layout: default
---
This blog post is to easily explain how to use abstractions in Pure Data.

Abstractions and sub-patches will make it easier to compartmentalize a complex patch and break it down into smaller parts.

An abstraction is a Pd patch that can be used as an object in another Pd patch.

To create an abstraction:
1. Create a Pd patch.
2. Save the patch in specified location.
3. Call an instance of that object in your new patch.

The abstraction must be saved in a place where Pd can find it. If you navigate to Pd-extended > Preferences, you can see a list of paths that Pure Data is searching through. You can either specify a new path or use one of the paths listed here. For Mac users recommend using Users/username/Library/Pd.

https://at.or.at/hans/pd/objects.html
