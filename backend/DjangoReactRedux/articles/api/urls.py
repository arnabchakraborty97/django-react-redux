from django.conf.urls import url, include
from .views import ArticleListView, ArticleDetailView

urlpatterns = [

		url(r'^$', ArticleListView.as_view()),
		url(r'^(?P<pk>[0-9]+)$', ArticleDetailView.as_view()),

]

