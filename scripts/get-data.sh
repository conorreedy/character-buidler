#!/bin/bash

feats_uri=(["feats"]="";
spells_uri=(["spells"]="");
classes_uri=(["classes"]="");
traits_uri=(["traits"]="");
races_uri=(["races"]="");
subclasses_uri=(["subclasses"]="");

endpoints=(feats_uri, spells_uri, classes_uri, traits_uri, races_uri, subclasses_uri);



for endpoint in endpoints
do
	curl endpoint


done