import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Directive({
  selector: '[jhiActiveMenu]'
})
export class ActiveMenuDirective implements OnInit {
  @Input() jhiActiveMenu: string;

  constructor(private el: ElementRef, private renderer: Renderer2, private translateService: TranslateService) {}

  ngOnInit() {
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.updateActiveFlag(event.lang);
    });
    this.updateActiveFlag(this.translateService.currentLang);
  }

  updateActiveFlag(selectedLanguage) {
    if (this.jhiActiveMenu === selectedLanguage) {
      // this.renderer.setElementClass(this.el.nativeElement, 'active', true);
      this.renderer.addClass(this.el.nativeElement, 'active');
    } else {
      // this.renderer.setElementClass(this.el.nativeElement, 'active', false);
      this.renderer.removeClass(this.el.nativeElement, 'active');
    }
  }
}
