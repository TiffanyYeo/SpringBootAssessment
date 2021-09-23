package org.generation.SpringBootAssessment.controller;


import org.generation.SpringBootAssessment.controller.dto.ItemDTO;
import org.generation.SpringBootAssessment.repository.entity.Item;
import org.generation.SpringBootAssessment.service.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;



import java.util.Date;

@RestController
@RequestMapping("/item")    // a naming "/item" is given

public class ItemController {

    final ItemService itemService;

    //constructor
    public ItemController(@Autowired ItemService itemService) {
        this.itemService = itemService;
    }

    @CrossOrigin
    //Cross-origin resource sharing (CORS) provides security to prohibit AJAX calls to the resources residing outside
    // the current origin.
    @GetMapping("/all") // a naming "/all" is given
    //GetMapping is the route that correspond to the HTTP GET method calls from the client.

    public Iterable<Item> getItems() {
        return itemService.all();   //calling a method all() in the service package - ItemService interface
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public Item findItemById(@PathVariable Integer id) {
        return itemService.findById(id);
    }

    @CrossOrigin
    @DeleteMapping("/{id}") //  {id} entry of the id value (integer)
    public void delete(@PathVariable Integer id) {
        itemService.delete(id);
    }

    @CrossOrigin
    @PostMapping("/add")
    //@RequestParam method to pass the information received from the clients
    public Item save(@RequestParam(name = "title", required = true) String title,
                     @RequestParam(name = "description", required = true) String description,
                     @RequestParam(name = "targetDate", required = true) Date targetDate)


    {
        ItemDTO itemDto = new ItemDTO(title, description, targetDate);
        return itemService.save(new Item(itemDto));
    }


}
