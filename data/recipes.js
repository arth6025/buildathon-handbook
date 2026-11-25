/* Engine recipes for the Assemble Buildathon.
   Every recipe is Claude connected to Sloosh through the Sloosh MCP, chaining
   three or more Sloosh tools. Sloosh is the platform; BytePlus (ByteDance)
   Seedream and Seedance are the default models, on the team's own key (BYOK). Each track-tagged card in cards.js points to one recipe through
   its "recipe" id. Tools named here are from the Sloosh release notes
   (#release-notes, Nov 2026). "confirm" marks a piece not in the notes yet. */
window.RECIPES = [
  { id:"winner-batch", track:"01", name:"Winner → batch",
    chain:["Claude reads your top 3 ads and names what worked","Seedream 5.5 statics, one hook each, with clean on-image text","Seedance 2.5 Flash cuts of the best two","Into a Sloosh Project, marked Approved"],
    proves:"Would a stranger stop scrolling?" },
  { id:"reviews-ugc", track:"01", name:"Reviews → UGC",
    chain:["Claude pulls customer lines from your review export","Synora: your AI Influencer says them on camera, lip-synced","Audio Studio adds music","Seedance cuts for Reels and Shorts"],
    proves:"Would a stranger stop scrolling?" },
  { id:"bharat", track:"01", name:"Bharat engine",
    chain:["Claude transcreates a winning ad per language","Seedream 5.5 statics with the new language on the image","Synora version in each language's voice","Native-speaker check before Approved"],
    proves:"Would a stranger stop, plus the regional power-up" },
  { id:"full-funnel", track:"02", name:"Full-funnel engine",
    chain:["Ad variants per audience (Seedream 5.5)","Landing-page workflow per audience (confirm)","Email HTML workflow per audience (confirm)","Claude checks one promise runs ad → page → email"],
    proves:"One promise, ad → page → email" },
  { id:"marketplace", track:"02", name:"Marketplace engine",
    chain:["Seedream 5.5 packshot on a transparent background","Multi-angle and in-use shots from references","Seedream 5.5 infographics with clear spec text","Side by side with the rival's listing"],
    proves:"Beats the rival's listing, side by side" },
  { id:"winback", track:"02", name:"Win-back engine",
    chain:["Claude segments your customer export","A visual per segment (Seedream 5.5)","Email HTML workflow per segment (confirm)","Offer lines checked for false claims"],
    proves:"The right offer for each segment" },
  { id:"shoot", track:"03", name:"Shoot without a shoot",
    chain:["Seedream 5.5 cut-out from one packshot","Your AI Influencer as the model, in use and on body","Seedream 5.5 hero shot","A Project folder per store, sized and Approved"],
    proves:"Approved assets from a cold run" },
  { id:"launch", track:"03", name:"Launch in a box",
    chain:["Claude plans the drop and runs Sloosh Spaces through the MCP","Posters and posts (Seedream 5.5)","Calypso remixes a trending reel into your launch reel","Audio Studio music, everything in one Project"],
    proves:"Approved assets from a cold run" },
  { id:"brand-guard", track:"03", name:"Brand guard loop",
    chain:["Your logo, pack and face saved as @elements","Every generation uses the elements","Claude checks colour, type and claims against the brand kit","Approve or reject in the Project, fix only what's off"],
    proves:"Approved assets from a cold run" }
];
