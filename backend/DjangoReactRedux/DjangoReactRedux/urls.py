from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.conf.urls import url, include

urlpatterns = [

	# admin/
    url(r'^admin/', admin.site.urls),

    # restframework
    url(r'^api-auth/', include('rest_framework.urls')),

    # api
    url(r'^api/articles/', include('articles.api.urls')),

]

if settings.DEBUG:
	urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
	urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)