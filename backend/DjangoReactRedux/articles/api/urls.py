from articles.api.views import ArticleViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'articles', ArticleViewSet, base_name='article')

urlpatterns = router.urls