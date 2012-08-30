<div class="eight columns">
      <ul class="nav-bar"> 
      {% for link in site.navigation %}
      {% if page.url contains link.url %}
      <li class="active"><a href="/{{link.url}}" class="active">{{link.text}}</a></li>
      {% else %}
      <li><a href="/{{link.url}}">{{link.text}}</a></li>
      {% endif %}
      {% endfor %}
      </ul>
  </div>
