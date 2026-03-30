---
layout: page
permalink: /talks/
title: talks
description: I generally try to share here my slides from public talks I've given.
nav: true # todo, add this back when ready to have projects page
nav_order: 6
---

<style>
.talk-item {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
}
.talk-venue {
  flex-shrink: 0;
  background-color: #4CAF50;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  height: fit-content;
  width: 150px;
  text-align: center;
  transition: background-color 0.3s ease;
}
.talk-venue:hover {
  background-color: #45a049;
  cursor: pointer;
}
.talk-content {
  flex-grow: 1;
}
@media (max-width: 768px) {
  .talk-item {
    flex-direction: column;
    gap: 1rem;
  }
  .talk-venue {
    width: auto;
  }
}
</style>

{% assign talk_items = site.talks | sort: 'date' | reverse %}

{% for item in talk_items %}

<div class="talk-item">
{% if item.venue %}
{% if item.venue_url %}
<a href="{{ item.venue_url }}" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">
<div class="talk-venue">
{{ item.venue }}
</div>
</a>
{% else %}
<div class="talk-venue">
{{ item.venue }}
</div>
{% endif %}
{% endif %}
<div class="talk-content">
<h5 style="margin-top: 0;">{{ item.title }}</h5>
<div style="display: flex; align-items: center; gap: 1rem; margin-top: -0.5rem; margin-bottom: 0.5rem;">
{% if item.date %}
<span style="font-size: 0.9em; font-style: italic; color: #666;">{{ item.date | date: "%B %Y" }}</span>
{% endif %}
{% if item.slides %}
<a href="{{ '/assets/pdf/' | append: item.slides | relative_url }}" target="_blank" rel="noopener noreferrer">
<i class="fa-solid fa-file-pdf"></i> 
</a>
{% endif %}
</div>
{% if item.content != '' %}
<div>{{ item.content }}</div>
{% endif %}
</div>
</div>
<hr>
{% endfor %}
