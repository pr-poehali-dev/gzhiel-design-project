import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const galleryItems = [
    { id: 1, title: 'Чайный сервиз "Нежность"', price: '12 500 ₽', category: 'Посуда', image: 'https://cdn.poehali.dev/projects/1b39d95e-e505-49d2-8818-7d38f9c97f19/files/db81d3a3-9f88-4880-81d4-6fdb5ac2187a.jpg' },
    { id: 2, title: 'Коллекция "Цветущий сад"', price: '8 900 ₽', category: 'Декор', image: 'https://cdn.poehali.dev/projects/1b39d95e-e505-49d2-8818-7d38f9c97f19/files/91b5ca3e-0e37-41a0-8b3f-46351bc845f7.jpg' },
    { id: 3, title: 'Ваза "Весенний узор"', price: '5 200 ₽', category: 'Вазы', image: 'https://cdn.poehali.dev/projects/1b39d95e-e505-49d2-8818-7d38f9c97f19/files/91b5ca3e-0e37-41a0-8b3f-46351bc845f7.jpg' },
    { id: 4, title: 'Статуэтка "Птица счастья"', price: '3 700 ₽', category: 'Статуэтки', image: 'https://cdn.poehali.dev/projects/1b39d95e-e505-49d2-8818-7d38f9c97f19/files/91b5ca3e-0e37-41a0-8b3f-46351bc845f7.jpg' },
    { id: 5, title: 'Тарелка декоративная', price: '2 100 ₽', category: 'Посуда', image: 'https://cdn.poehali.dev/projects/1b39d95e-e505-49d2-8818-7d38f9c97f19/files/db81d3a3-9f88-4880-81d4-6fdb5ac2187a.jpg' },
    { id: 6, title: 'Шкатулка "Морозный узор"', price: '4 300 ₽', category: 'Декор', image: 'https://cdn.poehali.dev/projects/1b39d95e-e505-49d2-8818-7d38f9c97f19/files/91b5ca3e-0e37-41a0-8b3f-46351bc845f7.jpg' },
  ];

  const timeline = [
    { year: '1320-е', event: 'Первые упоминания гончарного промысла в Подмосковье' },
    { year: '1802', event: 'Открытие первого фарфорового завода в селе Гжель' },
    { year: '1830-е', event: 'Расцвет гжельского промысла, формирование узнаваемого стиля' },
    { year: '1972', event: 'Создание объединения "Гжель", возрождение традиций' },
    { year: 'Сегодня', event: 'Гжель - один из ведущих центров керамики в России' },
  ];

  const masterclasses = [
    { title: 'Основы росписи', duration: '2 часа', level: 'Начинающий', price: '2 500 ₽' },
    { title: 'Техника мазка', duration: '3 часа', level: 'Продолжающий', price: '3 500 ₽' },
    { title: 'Создание композиции', duration: '4 часа', level: 'Профессионал', price: '5 000 ₽' },
  ];

  const videos = [
    { title: 'История Гжели за 10 минут', duration: '10:24', views: '125K' },
    { title: 'Секреты синего цвета', duration: '8:15', views: '89K' },
    { title: 'Мастер-класс: роспись чашки', duration: '15:30', views: '234K' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold text-primary">Гжель</h1>
            <div className="hidden md:flex gap-8">
              {['home', 'history', 'gallery', 'masterclass', 'videos', 'shop', 'contacts'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  {item === 'home' ? 'Главная' : 
                   item === 'history' ? 'История' :
                   item === 'gallery' ? 'Галерея' :
                   item === 'masterclass' ? 'Мастер-классы' :
                   item === 'videos' ? 'Видео-уроки' :
                   item === 'shop' ? 'Магазин' : 'Контакты'}
                </button>
              ))}
            </div>
            <Button variant="outline" size="icon" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 px-4 animate-fade-in">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
                Искусство Гжели
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Традиционный русский промысел с многовековой историей. Изящная роспись, 
                уникальные изделия и мастерство, передающееся из поколения в поколение.
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('shop')}>
                  Магазин изделий
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('masterclass')}>
                  Мастер-классы
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/1b39d95e-e505-49d2-8818-7d38f9c97f19/files/db81d3a3-9f88-4880-81d4-6fdb5ac2187a.jpg"
                alt="Гжельская керамика"
                className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="history" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center text-primary mb-12">
            История Гжели
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
              {timeline.map((item, index) => (
                <div key={index} className="relative mb-12 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="font-heading text-2xl font-bold text-primary mb-2">{item.year}</div>
                      <p className="text-muted-foreground">{item.event}</p>
                    </div>
                    <div className="w-2/12 flex justify-center">
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                    </div>
                    <div className="w-5/12"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center text-primary mb-12">
            Галерея изделий
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-square overflow-hidden bg-secondary/20">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-xs text-accent font-medium mb-2">{item.category}</div>
                  <h3 className="font-heading text-xl font-semibold mb-2">{item.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                    <Button size="sm" variant="outline">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="masterclass" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center text-primary mb-4">
            Онлайн мастер-классы
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Научитесь создавать настоящую гжельскую роспись под руководством опытных мастеров
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {masterclasses.map((mc, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Paintbrush" size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">{mc.title}</h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Icon name="Clock" size={16} className="mr-2" />
                      {mc.duration}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Icon name="Award" size={16} className="mr-2" />
                      {mc.level}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-primary mb-4">{mc.price}</div>
                  <Button className="w-full">Записаться</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="videos" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center text-primary mb-12">
            Видео-уроки
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {videos.map((video, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow animate-scale-in cursor-pointer" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative aspect-video bg-secondary/20">
                  <img
                    src="https://cdn.poehali.dev/projects/1b39d95e-e505-49d2-8818-7d38f9c97f19/files/3c5683cf-7859-4a13-bfc6-2664ff49f718.jpg"
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <Icon name="Play" size={28} className="text-primary ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{video.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Eye" size={14} className="mr-1" />
                    {video.views} просмотров
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">
            Магазин изделий
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Каждое изделие создано вручную мастерами по традиционным технологиям
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Icon name="TruckIcon" size={32} className="mx-auto mb-3 text-primary" />
              <h3 className="font-heading font-semibold mb-2">Доставка по России</h3>
              <p className="text-sm text-muted-foreground">Бережная упаковка и быстрая доставка</p>
            </div>
            <div className="text-center">
              <Icon name="Shield" size={32} className="mx-auto mb-3 text-primary" />
              <h3 className="font-heading font-semibold mb-2">Гарантия подлинности</h3>
              <p className="text-sm text-muted-foreground">Все изделия сертифицированы</p>
            </div>
            <div className="text-center">
              <Icon name="Gift" size={32} className="mx-auto mb-3 text-primary" />
              <h3 className="font-heading font-semibold mb-2">Подарочная упаковка</h3>
              <p className="text-sm text-muted-foreground">Бесплатная упаковка к каждому заказу</p>
            </div>
          </div>
          <Button size="lg" onClick={() => scrollToSection('gallery')}>
            Смотреть каталог
          </Button>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-heading font-bold text-center text-primary mb-12">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-2xl font-semibold mb-6">Свяжитесь с нами</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Icon name="MapPin" size={20} className="text-primary mr-3 mt-1" />
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-muted-foreground">Московская область, Раменский район, село Гжель</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Phone" size={20} className="text-primary mr-3 mt-1" />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Mail" size={20} className="text-primary mr-3 mt-1" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">info@gzhel-art.ru</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Clock" size={20} className="text-primary mr-3 mt-1" />
                  <div>
                    <div className="font-semibold">Режим работы</div>
                    <div className="text-muted-foreground">Пн-Пт: 9:00 - 18:00<br />Сб-Вс: 10:00 - 16:00</div>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-4">Задайте вопрос</h3>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" />
                  </div>
                  <div>
                    <Textarea placeholder="Ваше сообщение" rows={4} />
                  </div>
                  <Button className="w-full">Отправить</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <h3 className="font-heading text-2xl font-bold mb-4">Гжель</h3>
          <p className="text-primary-foreground/80 mb-4">
            Традиционный русский промысел с 1802 года
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Youtube" size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
