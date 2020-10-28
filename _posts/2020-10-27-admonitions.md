---
title: "Box 스타일 모음"
categories:
  - UI 개발
tags: 
  - UI 개발
  - style
  - css
  - box
---

### Note
{% include admonitions.html type="note" description="<p>노트 노트 노트 노트 노트 노트 </p><p>노트</p>" %}

### Caution
{% include admonitions.html type="caution" description="<p>1번째 줄: 주의 주의 주의 주의 주의 주의 주의 </p><p>2번째 줄: 주의 주의 주의 주의 주의 주의 주의 </p>" %}

### Tip
{% include admonitions.html type="tip" description="<p>팁 팁 팁 팁 팁 팁 팁 팁 팁 팁</p>" %}

### Important
{% include admonitions.html type="important" description="<p>임포넌트 임포넌트 임포넌트 임포넌트</p>" %}

### Notice
{% include admonitions.html type="notice" description="<p>공지 공지 공지 공지 공지 공지공지공지 공지 공지 테스트 공지 테스트 공지 테스트 </p>" %}

### Warning
{% include admonitions.html type="warning" description="<p>주의 주의 주의 주의 주의 주의 주의 </p>" %}

### Danger
{% include admonitions.html type="danger" description="<p>위험 위험 위험 위험 위험 위험</p>" %}


## Banner
{% include banner.html message="중요한 메세지" description="해당 메세지를 설명하는 텍스트영역" %}


## Default Notice
Kramdown을 사용할 때는 문장 뒤에 `{: .notice}`를 추가하여 `.notice`를 `<p></p>` 요소에 할당 할 수 있습니다. 

<div class="notice--primary" markdown="1">
**Primary Notice with code block:** 어머니, 별에도 내 봄이 계절이 봅니다. 소학교 비둘기, 것은 경, 묻힌 이름과 이제 오는 까닭입니다. 가득 하나의 이 그리워 거외다. 아침이 이름을 토끼, 별 아직 있습니다. 오는 어머니, 흙으로 무성할 이네들은 라이너 보고, 거외다. 별 나의 지나가는 듯합니다..
</div>

**Info Notice:** 이상은 얼마나 피어나는 사라지지 그들에게 쓸쓸하랴? 꽃이 심장의 원대하고, 너의 피어나는 원질이 투명하되 같은 칼이다. 보는 천지는 그와 칼이다. 든 그와 뜨거운지라, 이성은 광야에서 구하지 행복스럽고 때문이다. 같이, 새 생명을 생생하며, 것이다.보라, 바이며, 있는가? 이는 피부가 인간에 것이다. 그들은 청춘이 가슴에 열락의 얼마나 하는 돋고, 온갖 사막이다. 이상 보이는 그것은 못할 봄바람이다. 미묘한 때까지 크고 얼마나 소리다.이것은 물방아 그리하였는가? 청춘은 무엇을 관현악이며, 바로 속에 생생하며, 사라지지 것이다. 가진 위하여, 인생에 얼음 얼음에 얼마나 보내는 인간의 못할 이것이다.
{: .notice--info}

**Warning Notice:** 있는 살았으며, 있는 아니다. 설산에서 그들을 별과 눈에 그러므로 보라. 위하여서, 아니더면, 무엇을 그것은 두기 인간의 쓸쓸하랴? 청춘의 보이는 때에, 얼마나 힘차게 청춘을 있는가? 옷을 설산에서 심장의 아름다우냐? 그것을 대한 있는 품었기 오아이스도 가진 부패를 지혜는 아니다. 같지 위하여 인생을 싸인 보배를 것이다. 위하여, 그들에게 동산에는 있을 무엇을 얼마나 것이다. 위하여서, 그들의 되는 그들에게 고행을 가치를 아름다우냐? 하여도 내려온 간에 이상이 방황하여도, 따뜻한 그들의 할지니, 굳세게 교향악이다.
{: .notice--warning}

**Danger Notice:** 청춘의 남는 인간에 무엇을 살았으며, 우리 때에, 것이다. 싶이 원대하고, 이상의 기관과 때문이다. 풍부하게 않는 그들은 영원히 그들의 미묘한 불어 그들은 유소년에게서 힘있다. 작고 심장의 물방아 인류의 그러므로 것은 풍부하게 있으랴? 있는 굳세게 방황하였으며, 사막이다. 이상은 열락의 불어 청춘이 가는 가장 봄바람이다. 목숨이 같지 맺어, 인도하겠다는 인생을 예가 말이다. 갑 역사를 위하여 위하여서 피가 이상이 철환하였는가? 영원히 눈에 우리 천지는 귀는 보라. 트고, 풀이 몸이 얼음이 부패뿐이다. 역사를 이상 이것을 피어나는 실현에 이상의 꾸며 싸인 생명을 사막이다.
{: .notice--danger}

**Success Notice:** 이름자 파란 아름다운 않은 시와 나는 둘 버리었습니다. 사랑과 노새, 이름을 써 봅니다. 그러나 언덕 나는 차 계집애들의 다 둘 마리아 토끼, 봅니다. 부끄러운 별 지나가는 무성할 없이 멀듯이, 무덤 있습니다. 다하지 별에도 하나의 부끄러운 까닭입니다.
{: .notice--success}


{% capture notice-2 %}
#### 새로운 사이트 특징

* You can now have cover images on blog pages
* Drafts will now auto-save while writing
{% endcapture %}

<div class="notice">{{ notice-2 | markdownify }}</div>


다른 방법은 capture를 사용하지 않고 바로 HTML을 사용할 수 있다.

<div class="notice">
  <h4>Message</h4>
  <p>A basic message.</p>
</div>